<template>
  <div class="contact-us">
    <PageHeader
      :title="pageTitle"
      :description="pageDescription"
      :backgroundImage="backgroundImage"
    />
    <ContactSection
      :title="contactTitle"
      :subtitle="contactSubtitle"
      :phoneNumber="phoneNumber"
      :formattedPhoneNumber="formattedPhoneNumber"
      :email="email"
      :socialLinks="socialLinks"
    />
  </div>
</template>

<script setup lang="ts">
const pageTitle = "Contact Us";
const pageDescription =
  "Contact Happy Tours in Kavos, Corfu, to book unforgettable fishing trips and tours to the Blue Lagoon in Sivota, plus the stunning islands of Paxos and Antipaxos.";
const backgroundImage = "blue-lagoon-beach.jpg";
const contactTitle = "Get in Touch";
const contactSubtitle = "Ready to book your cruise? Contact us today!";
const phoneNumber = "+306981712060";
const formattedPhoneNumber = "+30 698 171 2060";
const email = "happytourscfu@gmail.com";
const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/happytourskavos/",
    icon: "mdi-instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/groups/610540991023965/",
    icon: "mdi-facebook",
  },
  {
    name: "Google Maps",
    url: "https://maps.app.goo.gl/RkGxxXjnHXqrqBJU6",
    icon: "mdi-map-marker",
  },
];
useHead({
  title: pageTitle,
  meta: [
    { name: "description", content: pageDescription },
    // ... [Open Graph and Twitter meta tags]
  ],
  link: [{ rel: "canonical", href: "https://www.happy-tours.gr/contact-us" }],
});
</script>

<style scoped></style>
