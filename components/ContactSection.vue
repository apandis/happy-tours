<template>
  <section id="contact-section">
    <v-container class="my-12">
      <!-- Section Title -->
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 class="display-3 font-weight-bold">{{ title }}</h2>
          <p class="subtitle-1">{{ subtitle }}</p>
        </v-col>
      </v-row>

      <!-- Contact Methods -->
      <v-row>
        <!-- Phone Contact -->
        <v-col cols="12" md="4" class="text-center mb-4">
          <v-btn icon color="primary" :href="`tel:${phoneNumber}`">
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <p class="font-weight-bold">
            Call us at:
            <a :href="`tel:${phoneNumber}`">{{ formattedPhoneNumber }}</a>
          </p>
        </v-col>

        <!-- Email Contact -->
        <v-col cols="12" md="4" class="text-center mb-4">
          <v-btn icon color="primary" :href="`mailto:${email}`">
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <p class="font-weight-bold">
            Email us at:
            <a :href="`mailto:${email}`">{{ email }}</a>
          </p>
        </v-col>

        <!-- Social Media Links -->
        <v-col cols="12" md="4" class="text-center mb-4">
          <div>
            <v-btn
              v-for="(social, index) in socialLinks"
              :key="index"
              icon
              color="primary"
              :href="social.url"
              target="_blank"
              class="mx-2"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
          <p class="font-weight-bold mt-2">Follow us on Social Media:</p>
          <p>
            <span v-for="(social, index) in socialLinks" :key="index">
              <a
                :href="social.url"
                target="_blank"
                class="text-decoration-none text-primary"
              >
                {{ social.name }}
              </a>
              <span v-if="index < socialLinks.length - 1"> | </span>
            </span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Get in Touch",
  },
  subtitle: {
    type: String,
    default: "Ready to book your cruise? Contact us today!",
  },
  phoneNumber: {
    type: String,
    default: "+306981712060",
  },
  formattedPhoneNumber: {
    type: String,
    default: "+30 698 171 2060",
  },
  email: {
    type: String,
    default: "happytourscfu@gmail.com",
  },
  socialLinks: {
    type: Array,
    default: () => [
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
    ],
  },
});
</script>
