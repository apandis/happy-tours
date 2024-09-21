export default defineEventHandler((event) => {
  const { slug } = event.context.params;

  // Dummy data - replace with actual data fetching logic
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

  const tour = tours.find((t) => t.slug === slug);

  if (tour) {
    return tour;
  } else {
    // Handle 404 Not Found
    throw createError({
      statusCode: 404,
      statusMessage: "Tour not found",
    });
  }
});
