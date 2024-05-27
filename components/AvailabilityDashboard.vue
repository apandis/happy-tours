<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="days"
          label="Number of Days to Show"
          type="number"
          min="1"
          @change="fetchAvailability"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="availability" class="elevation-1">
      <template v-slot:[`item.date`]="{ item }">
        {{ formatDate(item.date) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
const availability = ref([]);
const days = ref(7);

const headers = [
  { title: "Date", value: "date", align: "start" },
  { title: "Morning Availability", value: "morning", align: "center" },
  { title: "Sunset Availability", value: "sunset", align: "center" },
];

const fetchAvailability = async () => {
  const { data } = await useFetch("/api/availability", {
    params: { days: days.value },
  });
  availability.value = data.value;
};

const formatDate = (dateString) => {
  // Ensure the date string is correctly formatted and parsed
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString();
};

onMounted(fetchAvailability);
watch(days, fetchAvailability);
</script>
