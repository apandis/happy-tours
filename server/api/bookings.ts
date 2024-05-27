import { defineEventHandler, readBody } from "h3";
import CosmosDBClient from "../db/cosmosClient";

const client = CosmosDBClient.getInstance();
const database = client.database("happy-tours");
const container = database.container("Bookings");

export default defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const body = await readBody(event);
    const { tourType, date, numTickets } = body;

    const querySpec = {
      query: "SELECT * FROM c WHERE c.date = @date AND c.tourType = @tourType",
      parameters: [
        { name: "@date", value: date },
        { name: "@tourType", value: tourType },
      ],
    };

    const { resources: existingBookings } = await container.items
      .query(querySpec)
      .fetchAll();
    const totalTickets = existingBookings.reduce(
      (sum, booking) => sum + booking.numTickets,
      0
    );

    if (totalTickets + numTickets <= 10) {
      const newBooking = {
        tourType,
        date,
        numTickets,
      };
      await container.items.create(newBooking);
      return { success: true, message: "Booking successful" };
    } else {
      return { success: false, message: "Not enough tickets available" };
    }
  } else if (event.req.method === "GET") {
    // List bookings
    const { resources: bookings } = await container.items.readAll().fetchAll();
    return bookings;
  }
});
