<template>
  <!-- Hero Section -->
  <v-container fluid class="hero-section">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1 class="display-2 font-weight-bold mb-4 text-white text-shadow">
          Happy Tours Kavos
        </h1>
        <p class="headline mb-6 text-white text-shadow">
          Enjoy daily cruises from Kavos to the Blue Lagoon, Paxos, and more,
          all with a fun fishing experience!
        </p>
        <v-btn color="primary" large @click="scrollToSection('cruiseOptions')">
          Explore Our Cruises
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- Cruise Options Section -->
  <v-container id="cruiseOptions" class="my-12">
    <v-row>
      <v-col cols="12" class="text-center mb-6">
        <h2 class="display-3 font-weight-bold">Our Cruises</h2>
        <p class="subtitle-1">Choose the perfect cruise for your adventure.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(cruise, index) in cruises"
        :key="index"
        class="d-flex"
      >
        <v-card class="flex-grow-1 mb-6" elevation="2" max-height="400px">
          <v-img
            :src="cruise.image"
            height="200"
            aspect-ratio="2.75"
            cover
            alt="Cruise image"
          ></v-img>
          <v-card-title class="headline">{{ cruise.title }}</v-card-title>
          <v-card-subtitle>{{ cruise.subtitle }}</v-card-subtitle>
          <v-card-text>{{ cruise.description }}</v-card-text>
          <v-card-actions class="justify-end">
            <v-btn color="primary" text @click="openCruiseInquiries()"
              >Learn More</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Quick Info Section -->
  <v-container fluid class="info-section py-8">
    <v-row>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="36" color="primary">mdi-fish</v-icon>
        <p class="headline font-weight-bold mt-2">Fishing on Every Cruise</p>
        <p>All our cruises include fishing activities with gear provided.</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="36" color="primary">mdi-glass-cocktail</v-icon>
        <p class="headline font-weight-bold mt-2">Complimentary Drinks</p>
        <p>Enjoy complimentary drinks while you relax and soak in the views.</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <!-- Updated Icon -->
        <v-icon size="36" color="primary">mdi-map-marker-circle</v-icon>
        <p class="headline font-weight-bold mt-2">Explore Hidden Gems</p>
        <p>
          Discover secret beaches, hidden caves, and the best fishing spots.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- Contact Section -->
  <v-container id="contactSection" class="my-12">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2 class="display-3 font-weight-bold">Get in Touch</h2>
        <p class="subtitle-1">Ready to book your cruise? Contact us today!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" class="text-center mb-4">
        <v-btn icon color="primary">
          <v-icon>mdi-phone</v-icon>
        </v-btn>
        <p class="font-weight-bold">
          Call us at: <a href="tel:+306981712060">+30 698 171 2060</a>
        </p>
      </v-col>
      <v-col cols="12" md="4" class="text-center mb-4">
        <v-btn icon color="primary">
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <p class="font-weight-bold">
          Email us at:
          <a href="mailto:happytourscfu@gmail.com">happytourscfu@gmail.com</a>
        </p>
      </v-col>
      <!-- Improved Social Media and Location Links -->
      <v-col cols="12" md="4" class="text-center mb-4">
        <div class="d-flex justify-center align-center flex-wrap">
          <v-btn
            icon
            color="primary"
            class="mx-2 mb-2"
            @click="openLink('https://www.instagram.com/happytourskavos/')"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            icon
            color="primary"
            class="mx-2 mb-2"
            @click="
              openLink('https://www.facebook.com/groups/610540991023965/')
            "
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            color="primary"
            class="mx-2 mb-2"
            @click="openLink('https://maps.app.goo.gl/RkGxxXjnHXqrqBJU6')"
          >
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </div>
        <p class="font-weight-bold mt-2">Follow us on Social Media:</p>
        <p>
          <a
            href="https://www.instagram.com/happytourskavos/"
            target="_blank"
            class="text-decoration-none text-primary"
            @click="triggerEvent('instagram_link')"
            >Instagram</a
          >
          |
          <a
            href="https://www.facebook.com/groups/610540991023965/"
            target="_blank"
            class="text-decoration-none text-primary"
            @click="triggerEvent('facebook_link')"
            >Facebook</a
          >
          |
          <a
            href="https://maps.app.goo.gl/RkGxxXjnHXqrqBJU6"
            target="_blank"
            class="text-decoration-none text-primary"
            @click="triggerEvent('google_maps_link')"
            >Google Maps</a
          >
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- Footer Section -->
  <v-footer color="grey darken-4" class="text-white text-center py-4">
    <v-container>
      <v-row>
        <v-col>
          <p>© 2024 Happy Tours Kavos. All Rights Reserved.</p>
          <!-- Navigation Links -->
          <div class="mt-6">
            <NuxtLink
              to="/privacy-policy"
              class="text-decoration-none text-white"
            >
              Privacy Policy
            </NuxtLink>
            |
            <NuxtLink
              to="/terms-and-conditions"
              class="text-decoration-none text-white"
            >
              Terms & Conditions
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const router = useRouter();
const gtm = useGtm();
// Cruise options data
const cruises = ref([
  {
    image: "blue-lagoon-beach.jpg",
    title: "Blue Lagoon Sivota",
    subtitle: "A quick escape to paradise.",
    description:
      "Enjoy a short trip to the beautiful Blue Lagoon. Swim, explore caves, and fish with all gear provided.",
  },
  {
    image: "blue-lagoon-sunset.jpg",
    title: "Sunset Cruise",
    subtitle: "Experience the magic of sunset at sea.",
    description:
      "Relax on a serene evening cruise with fishing and complimentary drinks while enjoying a stunning sunset.",
  },
  {
    image: "paxos-voutoumi-beach.jpeg",
    title: "Paxos & Antipaxos",
    subtitle: "A full day of exploration and adventure.",
    description:
      "Discover hidden gems, swim in crystal clear waters, and enjoy fishing with fresh fish prepared on board.",
  },
]);

const openCruiseInquiries = () => {
  triggerEvent("cruise_inquiries");
  router.push("/contact");
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  triggerEvent("explore_cruises");
};

const triggerEvent = (eventName) => {
  gtm.push({ event: eventName });
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  background: url("/public/blue-lagoon-cave.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}
/* Ensure text appears above the overlay */
.text-center {
  position: relative;
  z-index: 2;
}

/* Text shadow for improved readability */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.info-section {
  background-color: #f5f5f5;
}

.v-footer {
  padding: 20px 0;
}

.v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.v-card-actions.d-flex {
  flex-direction: column;
  align-items: center;
}

@media (max-width: 600px) {
  .hero-section {
    height: 300px;
    font-size: 1.2rem;
  }
}
</style>
