<template>
  <footer class="footer">
    <v-container class="py-4">
      <v-row align="center" justify="space-between">
        <!-- Logo and Company Name -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-4 mb-md-0">
          <NuxtLink
            to="/"
            class="d-inline-flex align-center text-decoration-none"
          >
            <v-img
              src="/favicon.ico"
              alt="Company Logo"
              max-height="50"
              contain
              class="mr-2"
            ></v-img>
            <span class="font-weight-bold">{{ companyName }}</span>
          </NuxtLink>
        </v-col>

        <!-- Navigation Links -->
        <v-col cols="12" md="4" class="text-center mb-4 mb-md-0">
          <v-btn
            v-for="(item, index) in navLinks"
            :key="index"
            :to="item.to"
            text
            class="mx-2"
            variant="plain"
            size="x-small"
          >
            {{ item.text }}
          </v-btn>
        </v-col>

        <!-- Social Media Icons -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-btn
            v-for="(social, index) in socialLinks"
            :key="index"
            icon
            :href="social.url"
            target="_blank"
            class="mx-2"
            variant="plain"
            size="x-small"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>

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
