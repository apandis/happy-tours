import { GoogleAuth } from "google-auth-library";

export default defineEventHandler(async (event) => {
  // Retrieve the service account key JSON from the environment variable
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    return {
      statusCode: 500,
      body: "Google Service Account Key is not configured properly.",
    };
  }

  try {
    // Parse the JSON string into an object
    const credentials = JSON.parse(serviceAccountKey);

    // Initialize the GoogleAuth client with the credentials
    const auth = new GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/business.manage"],
    });

    const client = await auth.getClient();

    const accountId = "5003751385587522666";
    const locationId = "ChIJJ-2aDZ2bXBMRpNNj1OWAWgw";
    const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;

    const response = await client.request({ url });

    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { statusCode: 500, body: "Failed to fetch reviews" };
  }
});
