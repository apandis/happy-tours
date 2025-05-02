<template>
  <footer class="footer">
    <v-container class="py-4">
      <!-- Legal Links and Copyright -->
      <v-row>
        <v-col cols="12" class="text-center mt-4">
          <div>
            <v-btn
              v-for="(legal, index) in legalLinks"
              :key="index"
              :to="legal.to"
              text
              small
              class="mx-2"
              variant="plain"
              size="x-small"
            >
              {{ legal.text }}
            </v-btn>
          </div>
          <small class="d-block mt-2">
            &copy; {{ currentYear }} {{ companyName }}. All rights reserved.
          </small>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
const props = defineProps({
  companyName: {
    type: String,
    default: "Happy Tours",
  },
  navLinks: {
    type: Array,
    default: () => [
      { text: "Home", to: "/" },
      { text: "About Us", to: "/about-us" },
      { text: "Tours", to: "/tours" },
      { text: "Contact Us", to: "/contact-us" },
    ],
  },
  socialLinks: {
    type: Array,
    default: () => [
      {
        icon: "mdi-facebook",
        url: "https://www.facebook.com/groups/610540991023965/",
      },
      {
        icon: "mdi-instagram",
        url: "https://www.instagram.com/happytourskavos/",
      },
      {
        icon: "mdi-map-marker",
        url: "https://maps.app.goo.gl/RkGxxXjnHXqrqBJU6",
      },
    ],
  },
  legalLinks: {
    type: Array,
    default: () => [
      { text: "Privacy Policy", to: "/privacy-policy" },
      { text: "Terms and Conditions", to: "/terms-and-conditions" },
    ],
  },
});

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background-color: #f5f5f5; /* Light gray background */
}

.footer .d-inline-flex {
  display: inline-flex;
}

.footer .align-center {
  align-items: center;
}

.footer .mr-2 {
  margin-right: 8px;
}
</style>
