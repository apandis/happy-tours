// server/api/tours.ts
import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  const tours = [
    {
      slug: "blue-lagoon-sivota",
      title: "Blue Lagoon Sivota",
      metaTitle: "Blue Lagoon Sivota - Happy Tours",
      metaDescription:
        "Enjoy a short trip to the beautiful Blue Lagoon. Swim, explore caves, and fish with all gear provided.",
      description:
        "Experience the beauty of the Blue Lagoon in Sivota with our exclusive tour...",
      imageUrl: "https://www.happy-tours.gr/blue-lagoon-beach.jpg",
      // Additional tour data
    },
    // ... [Other tours]
  ];

  return tours;
});
