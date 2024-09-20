<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - Happy Tours",
  meta: [
    { name: "author", content: "Happy Tours Kavos" },
    {
      name: "og:site_name",
      content: "Happy Tours",
    },
  ],
});
</script>
