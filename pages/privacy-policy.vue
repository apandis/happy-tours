<template>
  <v-container class="py-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-6">
          <v-card-title class="text-h4 font-weight-bold"
            >Privacy Policy</v-card-title
          >
          <v-card-subtitle class="mb-4"
            >Last updated: August 26, 2024</v-card-subtitle
          >

          <v-card-text>
            <p>
              Welcome to Happy Tours. We are committed to protecting your
              personal information and your right to privacy. If you have any
              questions or concerns about our policy or our practices with
              regard to your personal information, please contact us at
              <strong>happytourscfu@gmail.com</strong>.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">
              Information We Collect
            </h2>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the Website, express an interest in obtaining
              information about us or our products and services, or otherwise
              contact us.
            </p>
            <v-list>
              <v-list-item><strong>Name:</strong> Your full name.</v-list-item>
              <v-list-item
                ><strong>Email Address:</strong> Your email address for
                communication purposes.</v-list-item
              >
              <v-list-item
                ><strong>Phone Number:</strong> Your contact number to reach you
                regarding your bookings or inquiries.</v-list-item
              >
            </v-list>

            <h2 class="text-h6 font-weight-bold mt-6">
              How We Use Your Information
            </h2>
            <p>We use the information we collect or receive:</p>
            <v-list>
              <v-list-item
                >To communicate with you regarding your bookings, inquiries, and
                requests.</v-list-item
              >
              <v-list-item
                >To provide and manage the services you have
                requested.</v-list-item
              >
              <v-list-item
                >To send administrative information to you, such as changes to
                our terms, conditions, and policies.</v-list-item
              >
              <v-list-item
                >To comply with legal and regulatory obligations.</v-list-item
              >
            </v-list>

            <h2 class="text-h6 font-weight-bold mt-6">
              Sharing Your Information
            </h2>
            <p>
              We do not share your personal information with third parties
              except as necessary to provide our services, comply with the law,
              or protect our rights.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">
              Security of Your Information
            </h2>
            <p>
              We implement a variety of security measures to protect the safety
              of your personal information. However, no electronic transmission
              over the internet or information storage technology can be
              guaranteed to be 100% secure.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Your Privacy Rights</h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal information. You may also object to the
              processing of your personal information in certain circumstances.
              To exercise these rights, please contact us at
              <strong>happytourscfu@gmail.com</strong>.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We encourage
              you to review this policy periodically for any changes. Your
              continued use of our services after any modification to the
              privacy policy will constitute your acknowledgment of the
              modification and your consent to abide by and be bound by the
              modified policy.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us:
            </p>
            <v-list>
              <v-list-item>Email: happytourscfu@gmail.com</v-list-item>
              <v-list-item>Phone: +30 698 171 2060</v-list-item>
            </v-list>
          </v-card-text>

          <!-- Back Button -->
          <v-card-actions>
            <v-btn @click="goBack" color="primary" elevation="2"
              >Back to Homepage</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push("/"); // Replace '/' with the correct route for your homepage if different
};
useHead({
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content:
        "Read the privacy policy of Happy Tours to understand how we handle your data.",
    },
    // ... [Open Graph and Twitter meta tags]
  ],
  link: [
    { rel: "canonical", href: "https://www.happy-tours.gr/privacy-policy" },
  ],
});
</script>

<style scoped>
.text-h6 {
  margin-bottom: 16px;
}
p {
  margin-bottom: 16px;
}
</style>
