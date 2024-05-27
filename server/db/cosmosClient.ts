import { CosmosClient } from "@azure/cosmos";

class CosmosDBClient {
  private static instance: CosmosClient;

  private constructor() {}

  public static getInstance(): CosmosClient {
    if (!CosmosDBClient.instance) {
      CosmosDBClient.instance = new CosmosClient({
        endpoint: process.env.COSMOS_DB_ENDPOINT || "",
        key: process.env.COSMOS_DB_KEY || "",
      });
    }
    return CosmosDBClient.instance;
  }
}

export default CosmosDBClient;
