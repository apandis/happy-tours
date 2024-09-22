<template>
  <v-app>
    <!-- <AppNavigation /> -->
    <v-main>
      <slot />
      <!-- Use the Snackbar component -->
      <Snackbar />
    </v-main>
    <AppFooter
      :companyName="companyName"
      :navLinks="navLinks"
      :socialLinks="socialLinks"
      :legalLinks="legalLinks"
    />
  </v-app>
</template>
<script setup>
const companyName = "Happy Tours";

const navLinks = [
  { text: "Home", to: "/" },
  { text: "About Us", to: "/about-us" },
  { text: "Tours", to: "/tours" },
  { text: "Contact Us", to: "/contact-us" },
];

const socialLinks = [
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
];

const legalLinks = [
  { text: "Privacy Policy", to: "/privacy-policy" },
  { text: "Terms and Conditions", to: "/terms-and-conditions" },
];
</script>
