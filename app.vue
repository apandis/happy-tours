<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const messagesStore = useMessagesStore();
useHead({
  title: "Happy Tours - Fishing Adventures and Sunset Cruises in Corfu",
  meta: [
    {
      name: "description",
      content:
        "Happy Tours offers unique fishing experiences around Corfu, with trips to Paxos, Antipaxos, Blue Lagoon in Sivota, and sunset cruises starting from Kavos.",
    },
    {
      name: "keywords",
      content:
        "fishing experiences, Corfu fishing tours, Kavos fishing trips, Paxos boat tours, Antipaxos caves, Blue Lagoon Sivota, sunset cruises Corfu, fishing adventures, private fishing charters",
    },
    {
      name: "author",
      content: "Happy Tours Kavos",
    },
    // Open Graph (OG) Meta Tags for Social Sharing
    {
      property: "og:title",
      content: "Happy Tours - Fishing Adventures and Sunset Cruises in Corfu",
    },
    {
      property: "og:description",
      content:
        "Discover the best fishing adventures and sunset cruises around Corfu with Happy Tours. Explore Paxos, Antipaxos, and the Blue Lagoon in Sivota.",
    },
    {
      property: "og:image",
      content: "https://www.happy-tours.gr/blue-lagoon-beach.jpg", // Replace with your actual image URL
    },
    {
      property: "og:url",
      content: "https://www.happy-tours.gr",
    },
    {
      property: "og:type",
      content: "website",
    },
    // Twitter Meta Tags
    {
      name: "twitter:title",
      content: "Happy Tours - Fishing Adventures and Sunset Cruises in Corfu",
    },
    {
      name: "twitter:description",
      content:
        "Join Happy Tours for unforgettable fishing trips and sunset cruises around Corfu, visiting Paxos, Antipaxos, and the Blue Lagoon in Sivota.",
    },
    {
      name: "twitter:image",
      content: "https://www.happy-tours.gr/blue-lagoon-beach.jpg", // Same as OG image
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.happy-tours.gr" }, // Canonical URL for the homepage
  ],
});
onMounted(() => {
  messagesStore.fetchMessages();
});
</script>

<style scoped></style>
