<template>
  <v-container>
    <!-- Modern styled sheet -->
    <v-sheet class="pa-6" color="white" elevation="3">
      <v-form ref="form" v-model="valid" @submit.prevent="sendToWhatsApp">
        <!-- Location Input with Coordinates Fetching -->
        <v-text-field
          v-model="locationName"
          label="Detected Location"
          prepend-icon="mdi-map-marker"
          outlined
          dense
          readonly
          @focus="requestLocation"
          placeholder="Click to detect location"
        ></v-text-field>

        <!-- Cruise Type Dropdown -->
        <v-select
          v-model="cruiseType"
          :items="cruiseTypes"
          label="Select Cruise Type"
          prepend-icon="mdi-ship-wheel"
          outlined
          dense
        ></v-select>

        <!-- Date Input Field -->
        <v-text-field
          v-model="date"
          label="Enter Date (YYYY-MM-DD)"
          prepend-icon="mdi-calendar"
          outlined
          dense
          placeholder="YYYY-MM-DD"
        ></v-text-field>

        <!-- Number of People -->
        <v-text-field
          v-model="people"
          label="Number of People"
          prepend-icon="mdi-account-group"
          type="number"
          min="1"
          outlined
          dense
        ></v-text-field>

        <!-- Send to WhatsApp Button -->
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mt-4"
          @click="sendToWhatsApp"
        >
          Send to WhatsApp
        </v-btn>
      </v-form>
    </v-sheet>

    <!-- Dialog to Guide User on Enabling Location Services -->
    <v-dialog v-model="showDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Enable Location Services</v-card-title>
        <v-card-text>
          We need access to your location to detect your current location.
          Please enable location services in your device settings and try again.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">Got it</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Form state and validation
const valid = ref(false);

// Form data
const locationName = ref(""); // Displayed location name
const cruiseType = ref("");
const date = ref(""); // Keep date as a string for manual entry
const people = ref(1);

// Hidden coordinates data
const latitude = ref("");
const longitude = ref("");

// Data for cruise types dropdown
const cruiseTypes = ref(["Romantic", "Family", "Adventure", "Luxury"]);

// Dialog control
const showDialog = ref(false);

// Function to request location and show dialog if services are not enabled
const requestLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        latitude.value = position.coords.latitude.toFixed(6);
        longitude.value = position.coords.longitude.toFixed(6);
        await reverseGeocode(); // Fetch the location name based on coordinates
      },
      (error) => {
        console.error("Error fetching coordinates: ", error.message);
        showDialog.value = true; // Show dialog if location access is denied
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
};

// Reverse geocode to get location name from latitude and longitude
const reverseGeocode = async () => {
  // Replace with actual API call to a geocoding service
  try {
    // Example: Using OpenStreetMap's Nominatim API
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude.value}&lon=${longitude.value}`
    );
    const data = await response.json();

    if (data && data.display_name) {
      locationName.value = data.display_name;
    } else {
      locationName.value = "Unknown Location";
    }
  } catch (error) {
    console.error("Error with reverse geocoding: ", error);
    alert("Unable to fetch location name.");
    locationName.value = "Unknown Location";
  }
};

// Close the dialog
const closeDialog = () => {
  showDialog.value = false;
};

// Send data to WhatsApp
const sendToWhatsApp = () => {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number
  const message = `Location: ${locationName.value}, Cruise Type: ${cruiseType.value}, Date: ${date.value}, People: ${people.value}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
};
</script>

<style scoped>
.v-sheet {
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
}

.v-btn {
  width: 100%;
}
</style>
