<template>
  <v-container class="py-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-6">
          <v-card-title class="text-h4 font-weight-bold">
            Terms and Conditions
          </v-card-title>
          <v-card-subtitle class="mb-4"
            >Last updated: August 26, 2024</v-card-subtitle
          >

          <v-card-text>
            <p>
              Welcome to Happy Tours. By accessing our website and using our
              services, you agree to comply with and be bound by the following
              terms and conditions. Please read them carefully before using our
              services. If you have any questions, feel free to contact us at
              <strong>happytourscfu@gmail.com</strong>.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Acceptance of Terms</h2>
            <p>
              By accessing our website, you accept and agree to be bound by the
              terms and provisions of this agreement. In addition, when using
              our services, you shall be subject to any posted guidelines or
              rules applicable to such services, which may be posted and
              modified from time to time.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Modification of Terms</h2>
            <p>
              We reserve the right to change or modify these terms at any time.
              It is your responsibility to review these terms periodically for
              any updates or changes. Your continued use of the website
              following the posting of changes will mean that you accept and
              agree to the changes.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Booking and Payment</h2>
            <p>
              All bookings are subject to availability and confirmation. Prices
              for services are subject to change without notice. Full payment is
              required at the time of booking unless otherwise specified.
            </p>
            <p>
              We accept various payment methods, and by making a booking, you
              authorize us to charge your selected payment method for the total
              amount of your booking.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">
              Cancellation and Refund Policy
            </h2>
            <p>
              Cancellations must be made in accordance with our cancellation
              policy. Refunds will only be processed as per our stated refund
              policy, which may vary depending on the service and time of
              cancellation.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">User Responsibilities</h2>
            <p>
              You agree to use our services and website in a lawful manner. You
              shall not engage in any conduct that could damage, disable, or
              impair our services or interfere with any other party's use and
              enjoyment of the services.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Happy Tours shall not be
              liable for any direct, indirect, incidental, special, or
              consequential damages resulting from the use or inability to use
              our services, or for the cost of procurement of substitute
              services.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Happy Tours operates,
              without regard to its conflict of law principles.
            </p>

            <h2 class="text-h6 font-weight-bold mt-6">Contact Us</h2>
            <p>
              If you have any questions or concerns about these terms and
              conditions, please contact us:
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
  title: "Terms and Conditions",
  meta: [
    {
      name: "description",
      content:
        "Review the terms and conditions for using Happy Tours services.",
    },
    // ... [Open Graph and Twitter meta tags]
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.happy-tours.gr/terms-and-conditions",
    },
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
