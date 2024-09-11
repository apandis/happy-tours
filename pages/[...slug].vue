<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Loading Skeleton -->
        <v-skeleton-loader
          v-if="!tour"
          type="article"
          class="mb-4"
        ></v-skeleton-loader>

        <!-- Tour Content -->
        <div v-else>
          <!-- Tour Image -->
          <v-img
            :src="tour.thumbnailHiResURL"
            :alt="tour.pageTitle"
            width="100%"
            aspect-ratio="16/9"
            class="mb-6"
          ></v-img>

          <!-- Tour Details -->
          <v-card outlined class="mb-6">
            <v-card-title class="headline">{{ tour.pageTitle }}</v-card-title>
            <v-card-subtitle v-html="tour.descriptionIntro"></v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text v-html="tour.descriptionText"></v-card-text>
          </v-card>

          <!-- Keywords -->
          <v-row class="mb-6">
            <v-chip
              v-for="keyword in tour.keywords"
              :key="keyword"
              class="ma-2"
              color="primary"
              text-color="white"
            >
              {{ keyword }}
            </v-chip>
          </v-row>

          <!-- Reviews and Rating -->
          <v-card class="mb-6" outlined>
            <v-card-title>Rating: {{ tour.rating }} / 5</v-card-title>
            <v-card-subtitle>Reviews: {{ tour.reviewCount }}</v-card-subtitle>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "unhead"; // Nuxt's head manager for SEO
import tourData from "@/assets/data/tours.json"; // Import your tour data

// Ref to hold tour data
const tour = ref(null);

// Use Nuxt's route to get dynamic slug
const route = useRoute();

// Function to match the tour by slug
const matchTourBySlug = () => {
  let slug = route.params.slug;

  if (Array.isArray(slug)) {
    slug = slug.join("/");
  }

  slug = slug.toLowerCase().trim();

  // Find the tour based on slug
  if (Array.isArray(tourData)) {
    tour.value = tourData.find(
      (item) => item.pageUrlName.toLowerCase() === slug
    );
  } else if (tourData.pageUrlName.toLowerCase() === slug) {
    tour.value = tourData;
  }

  // Set SEO metadata dynamically
  if (tour.value) {
    useHead({
      title: tour.value.pageTitle,
      meta: [
        { name: "description", content: tour.value.overviewSummary },
        { name: "keywords", content: tour.value.keywords.join(", ") },
        { property: "og:title", content: tour.value.pageTitle },
        { property: "og:description", content: tour.value.overviewSummary },
        { property: "og:image", content: tour.value.thumbnailHiResURL },
        {
          property: "og:url",
          content: `https://yourwebsite.com/${tour.value.pageUrlName}`,
        },
      ],
    });
  }
};

// Load the tour data when component is mounted
onMounted(matchTourBySlug);
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
