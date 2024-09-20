<!-- pages/tours/[slug].vue -->
<template>
  <div v-if="tour">
    <v-container class="my-12">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="display-3 font-weight-bold">{{ tour.title }}</h1>
          <v-img
            :src="tour.imageUrl"
            :alt="tour.title"
            class="my-6"
            max-height="400"
          ></v-img>
          <p class="headline">{{ tour.subtitle }}</p>
          <p class="body-1">{{ tour.description }}</p>
          <!-- Additional tour details -->
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container class="my-12">
      <v-row>
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
          <p>Loading tour details...</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// Get the route parameters
const route = useRoute();
const slug = route.params.slug as string;

// Reactive variable for tour data
const tour = ref(null);

// Fetch tour data
const { data, pending, error } = await useAsyncData(`tour-${slug}`, () =>
  $fetch(`/api/tours/${slug}`)
);

if (error.value) {
  console.error("Failed to fetch tour data:", error.value);
} else {
  tour.value = data.value;
}

// SEO Meta Tags
watchEffect(() => {
  if (tour.value) {
    useHead({
      title: tour.value.metaTitle || tour.value.title,
      meta: [
        {
          name: "description",
          content: tour.value.metaDescription || tour.value.description,
        },
        // Open Graph Meta Tags
        {
          property: "og:title",
          content: tour.value.metaTitle || tour.value.title,
        },
        {
          property: "og:description",
          content: tour.value.metaDescription || tour.value.description,
        },
        {
          property: "og:image",
          content: tour.value.imageUrl,
        },
        {
          property: "og:url",
          content: `https://www.happy-tours.gr/tours/${slug}`,
        },
        {
          property: "og:type",
          content: "article",
        },
        // Twitter Meta Tags
        {
          name: "twitter:title",
          content: tour.value.metaTitle || tour.value.title,
        },
        {
          name: "twitter:description",
          content: tour.value.metaDescription || tour.value.description,
        },
        {
          name: "twitter:image",
          content: tour.value.imageUrl,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://www.happy-tours.gr/tours/${slug}`,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: tour.value.title,
            description: tour.value.description,
            image: tour.value.imageUrl,
            url: `https://www.happy-tours.gr/tours/${slug}`,
            provider: {
              "@type": "TravelAgency",
              name: "Happy Tours",
              url: "https://www.happy-tours.gr",
            },
          }),
        },
      ],
    });
  }
});
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
