<template>
  <v-snackbar v-model="snackbarVisible" :timeout="timeout" :color="color">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="closeSnackbar">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useSnackbarStore } from "@/stores/snackbar"; // Import the Pinia store

const snackbarStore = useSnackbarStore(); // Access the Pinia store

// Computed properties with getter and setter for v-model
const snackbarVisible = computed({
  get: () => snackbarStore.isVisible,
  set: (value) => {
    if (!value) {
      snackbarStore.hideSnackbar(); // Hide snackbar when setting to false
    }
  },
});

const message = computed(() => snackbarStore.message);
const color = computed(() => snackbarStore.color);
const timeout = computed(() => snackbarStore.timeout);

// Method to close the snackbar
const closeSnackbar = () => {
  snackbarStore.hideSnackbar(); // Use store action to update the state
};
</script>

<style scoped>
/* Add any custom styles for the snackbar here */
</style>
