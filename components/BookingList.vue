<template>
  <v-container>
    <v-list>
      <v-list-item v-for="booking in bookings" :key="booking.id">
        <v-list-item-content>
          <v-list-item-title
            >{{ booking.tourType }} Tour on
            {{ booking.date }}</v-list-item-title
          >
          <v-list-item-subtitle
            >{{ booking.numTickets }} Tickets</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
const bookings = ref([]);

onMounted(async () => {
  const { data } = await useFetch("/api/bookings");
  bookings.value = data.value;
});
</script>
