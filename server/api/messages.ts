import CosmosDBClient from "../db/cosmosClient";

// Initialize the CosmosDB client, database, and container
const client = CosmosDBClient.getInstance();
const database = client.database("happy-tours");
const container = database.container("Messages");

export default defineEventHandler(async (event) => {
  // Helper function to handle errors and send consistent error messages
  const sendErrorResponse = (message) => {
    return { success: false, message };
  };

  // Get the current date in ISO format (YYYY-MM-DD)
  const date = new Date().toISOString().split("T")[0];

  if (event.req.method === "POST") {
    try {
      // Parse the request body
      const body = await readBody(event);
      if (!body) {
        return sendErrorResponse("Invalid request body");
      }

      // Destructure body to extract necessary fields
      const {
        fullName,
        emailAddress,
        phoneNumber,
        preferredCruise,
        preferredDate,
        groupSize,
        cruiseType,
        specialRequests,
      } = body;

      // Validate required fields
      if (
        !fullName ||
        !emailAddress ||
        !phoneNumber ||
        !preferredCruise ||
        !preferredDate ||
        !groupSize ||
        !cruiseType
      ) {
        return sendErrorResponse("Missing required fields");
      }

      // Create a new message object
      const newMessage = {
        date,
        fullName,
        emailAddress,
        phoneNumber,
        preferredCruise,
        preferredDate,
        groupSize,
        cruiseType,
        specialRequests,
      };

      // Insert the new message into the CosmosDB container
      await container.items.create(newMessage);

      // Return a success response
      return { success: true, message: "Message submitted successfully" };
    } catch (error) {
      // Handle any errors during processing
      console.error("Error processing message:", error);
      return sendErrorResponse(
        "An error occurred while processing your message"
      );
    }
  } else if (event.req.method === "GET") {
    try {
      // Fetch all messages from the CosmosDB container
      const { resources: messages } = await container.items
        .readAll()
        .fetchAll();
      return { success: true, data: messages };
    } catch (error) {
      // Handle any errors during fetching
      console.error("Error fetching messages:", error);
      return sendErrorResponse("An error occurred while fetching messages");
    }
  } else {
    // Handle unsupported HTTP methods
    return sendErrorResponse("Unsupported HTTP method");
  }
});
