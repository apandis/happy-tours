import CosmosDBClient from "../db/cosmosClient";

const client = CosmosDBClient.getInstance();
const database = client.database("happy-tours");
const container = database.container("Bookings");

export default defineEventHandler(async (event) => {
  const { days = 7 } = getQuery(event);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // Ensure date is set to midnight UTC

  const availability = [];

  for (let i = 0; i < Number(days); i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const formattedDate = date.toISOString().split("T")[0];

    const morningQuery = {
      query:
        "SELECT SUM(c.numTickets) as totalTickets FROM c WHERE c.date = @date AND c.tourType = @tourType",
      parameters: [
        { name: "@date", value: formattedDate },
        { name: "@tourType", value: "Morning" },
      ],
    };

    const sunsetQuery = {
      query:
        "SELECT SUM(c.numTickets) as totalTickets FROM c WHERE c.date = @date AND c.tourType = @tourType",
      parameters: [
        { name: "@date", value: formattedDate },
        { name: "@tourType", value: "Sunset" },
      ],
    };

    const [morningResult, sunsetResult] = await Promise.all([
      container.items.query(morningQuery).fetchAll(),
      container.items.query(sunsetQuery).fetchAll(),
    ]);

    const morningTickets = morningResult.resources[0]?.totalTickets || 0;
    const sunsetTickets = sunsetResult.resources[0]?.totalTickets || 0;

    availability.push({
      date: formattedDate,
      morning: 10 - morningTickets,
      sunset: 10 - sunsetTickets,
    });
  }

  return availability;
});
