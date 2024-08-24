<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-row>
      <v-col cols="12" class="text-center">
        <!-- Heading -->
        <h1 class="display-2 mb-4">Happy Tours</h1>
        <!-- Subheading -->
        <h2 class="headline mb-4">
          Fishing Tours in Kavos - Book Your Adventure Today
        </h2>
        <!-- Description -->
        <p class="body-1 mb-6">
          Experience the thrill of fishing in Kavos, Corfu with our
          unforgettable tours. Book now for thrilling adventures and create
          lasting memories on the pristine waters.
        </p>
        <!-- Phone Number -->
        <p class="body-1">
          <strong>Call us at: </strong>
          <a href="tel:+306981712060" class="text-decoration-none text-success">
            +30 698 171 2060
          </a>
        </p>
        <!-- Email Address -->
        <p class="body-1">
          <strong>Email us at: </strong>
          <a
            href="mailto:happytourscfu@gmail.com"
            class="text-decoration-none text-primary"
          >
            happytourscfu@gmail.com
          </a>
        </p>
        <!-- WhatsApp Button -->
        <v-btn
          href="https://wa.me/306981712060"
          target="_blank"
          class="whatsapp-button mt-4"
          rounded
          elevation="3"
          height="50"
        >
          <v-icon size="24" class="me-2">mdi-whatsapp</v-icon>
          Book Now on WhatsApp
        </v-btn>
        <!-- Google Business Button -->
        <v-btn
          href="https://maps.app.goo.gl/RkGxxXjnHXqrqBJU6"
          target="_blank"
          class="google-button mt-4 ml-2"
          rounded
          elevation="3"
          height="50"
        >
          <v-icon size="24" class="me-2">mdi-google</v-icon>
          Visit Our Google Business Page
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No additional setup required
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}

.whatsapp-button {
  background: linear-gradient(45deg, #25d366, #128c7e);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.whatsapp-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.whatsapp-button .v-icon {
  color: white;
}

.google-button {
  background: #4285f4;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.google-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.google-button .v-icon {
  color: white;
}
</style>
