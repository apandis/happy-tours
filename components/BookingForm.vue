<template>
  <v-container>
    <v-form @submit.prevent="bookTour">
      <v-select v-model="tourType" :items="['Morning', 'Sunset']" label="Select Tour Type" required></v-select>
      <v-text-field v-model="date" label="Select Date" type="date" required></v-text-field>
      <v-text-field v-model="numTickets" label="Number of Tickets" type="number" required :rules="[
        (v) =>
          (v > 0 && v <= maxTickets) || `Max ${maxTickets} tickets available`,
      ]"></v-text-field>
      <v-btn type="submit" color="primary">Book Now</v-btn>
    </v-form>
    <v-alert v-if="message" :type="alertType">{{ message }}</v-alert>
  </v-container>
</template>

<script setup>
const tourType = ref("");
const date = ref("");
const numTickets = ref(1);
const maxTickets = 10;
const message = ref("");
const alertType = ref("");

const bookTour = async () => {
  const { data, error } = await useFetch("/api/bookings", {
    method: "POST",
    body: {
      tourType: tourType.value,
      date: date.value,
      numTickets: numTickets.value,
    },
  });

  if (data.value.success) {
    message.value = data.value.message;
    alertType.value = "success";
  } else {
    message.value = data.value.message;
    alertType.value = "error";
  }
};
</script>
