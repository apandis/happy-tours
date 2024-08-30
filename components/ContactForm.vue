<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" class="">
          <h1 class="text-h6 font-weight-bold mb-2">Cruise Inquiries</h1>
          <p class="text-body-2 text-justify">
            Please fill out the form below to inquire about our cruise options,
            availability, and pricing. Our team will get back to you as soon as
            possible with all the details you need to plan your perfect trip.
          </p>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Full Name"
            placeholder="John Doe"
            type="text"
            v-model="fullName"
            :rules="[rules.required('Full name'), rules.fullName]"
            hide-details="auto"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Email Address"
            placeholder="john.doe@example.com"
            type="email"
            v-model="emailAddress"
            :rules="[rules.required('Email address'), rules.emailAddress]"
            hide-details="auto"
            required
          ></v-text-field>
        </v-col>
        <!-- Phone Number Input Field -->
        <v-col cols="12">
          <v-phone-input
            label="Phone Number"
            type="tel"
            v-model="phoneNumber"
            defaultCountry="gr"
            :preferCountries="['de', 'fr', 'gb', 'us', 'it', 'es']"
            :rules="[rules.required('Phone number')]"
            hide-details="auto"
            required
          />
        </v-col>
        <v-col cols="12">
          <v-select
            label="Preferred Cruise"
            :items="[
              'Blue Lagoon Cruise',
              'Sunset Evening Cruise',
              'Paxos & Antipaxos Cruise',
              'Private All-Day Cruise',
            ]"
            v-model="preferredCruise"
            :rules="[rules.required('Preferred cruise')]"
            hide-details="auto"
            required
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-date-input
            prepend-icon=""
            append-inner-icon="mdi-calendar"
            label="Preferred Date"
            placeholder="mm/dd/yyyy"
            v-model="preferredDate"
            :rules="[rules.required('Preferred date')]"
            hide-details="auto"
            :min="currentDate"
            hide-actions
            required
          ></v-date-input>
        </v-col>
        <v-col cols="12">
          <v-number-input
            label="Group Size"
            control-variant="stacked"
            inset
            :max="8"
            :min="1"
            v-model="groupSize"
            :rules="[rules.required('Group Size')]"
            hide-details="auto"
            required
          ></v-number-input>
        </v-col>
        <v-col cols="12">
          <v-select
            label="Cruise Type"
            :items="['Shared Cruise', 'Private Cruise']"
            v-model="cruiseType"
            :rules="[rules.required('Cruise Type')]"
            hide-details="auto"
            required
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Special Requests"
            placeholder="Please use this space to provide your hotel details and any transport needs."
            rows="3"
            auto-grow
            v-model="specialRequests"
            :rules="[rules.required('Special Requests')]"
            hide-details="auto"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn @click="sendWhatsApp" block class="text-none" color="success">
            Message via WhatsApp
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn @click="sendEmail" block class="text-none" color="primary">
            Message via Email
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn
            @click="$router.push('/')"
            block
            class="text-none"
            variant="outlined"
          >
            Cancel
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
const router = useRouter();
// Define form references and data
const form = ref(null);
const fullName = ref("");
const emailAddress = ref("");
const phoneNumber = ref("");
const preferredCruise = ref(null);
const preferredDate = ref();
const groupSize = ref();
const cruiseType = ref(null);
const specialRequests = ref("");
const currentDate = ref(new Date());

// Computed property to handle the preferred date formatting
const formattedPreferredDate = computed({
  get() {
    return preferredDate.value ? formatDate(preferredDate.value) : null;
  },
  set(value) {
    preferredDate.value = value ? formatDate(value) : null;
  },
});

// Validation rules
const rules = {
  required: (fieldName) => (v) => !!v || `${fieldName} is required.`,
  fullName: (v) => {
    const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return (
      !v ||
      pattern.test(v) ||
      "Invalid full name. Please enter first and last name separated by a space."
    );
  },
  emailAddress: (v) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !v || pattern.test(v) || "Invalid email address.";
  },
  phoneNumber: (v) => {
    const pattern = /^\+?[0-9]{1,3}[\s.-]?[0-9]{1,3}[\s.-]?[0-9]{1,4}$/;
    return !v || pattern.test(v) || "Invalid phone number.";
  },
  groupSize: (v) => {
    return !v || v >= 1 || "Passenger number must be at least 1.";
  },
};

// Helper function to construct a message for WhatsApp and Email
const constructMessage = () => {
  return `Hello, I'm interested in booking the ${preferredCruise.value} (${
    cruiseType.value
  }) on ${formattedPreferredDate.value} for ${
    groupSize.value
  } persons. My name is ${fullName.value}, my contact number is ${
    phoneNumber.value
  }, and my email is ${emailAddress.value}. Special requests: ${
    specialRequests.value || "None"
  }`;
};

// Common validation function using validate() method
const validateForm = async () => {
  if (form.value) {
    const validationResult = await form.value.validate();
    if (validationResult.valid) {
      return true;
    } else {
      // Handle validation errors
      validationResult.errors.forEach((error) => {
        console.error(
          `Error in ${error.id}: ${error.errorMessages.join(", ")}`
        );
      });
      return false;
    }
  }
  return false;
};

// Function to send data to the API
const sendDataToApi = async () => {
  const payload = {
    fullName: fullName.value,
    emailAddress: emailAddress.value,
    phoneNumber: phoneNumber.value,
    preferredCruise: preferredCruise.value,
    preferredDate: formattedPreferredDate.value,
    groupSize: groupSize.value,
    cruiseType: cruiseType.value,
    specialRequests: specialRequests.value || "None",
  };

  try {
    // Use $fetch for making HTTP requests in Nuxt 3
    await $fetch("/api/messages", {
      method: "POST",
      body: payload, // Automatically stringified in $fetch
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Data sent to API successfully.");
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};

// Function to send WhatsApp message
const sendWhatsApp = async () => {
  const isValid = await validateForm();
  if (!isValid) return;

  // Send data to the API
  await sendDataToApi();

  // If form is valid, construct and send WhatsApp message
  const message = constructMessage();
  const whatsappNumber = "+306981712060";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
  resetForm();
  router.push("/");
};

// Function to send Email
const sendEmail = async () => {
  const isValid = await validateForm();
  if (!isValid) return;

  // Send data to the API
  await sendDataToApi();

  // If form is valid, construct and send email
  const subject = `Booking Inquiry for ${preferredCruise.value} (${cruiseType.value}) Cruise`;
  const body = constructMessage().replace(/, /g, "\n");

  const emailUrl = `mailto:happytourscfu@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.open(emailUrl, "_self");
  resetForm();
  router.push("/");
};

// Function to reset the form fields
const resetForm = () => {
  fullName.value = "";
  emailAddress.value = "";
  phoneNumber.value = "";
  preferredCruise.value = "";
  preferredDate.value = null;
  groupSize.value = null;
  cruiseType.value = null;
  specialRequests.value = "";
  form.value.reset();
};
</script>

<style scoped>
/* Custom styles for mobile devices */
@media (max-width: 600px) {
  h1 {
    font-size: 1.25rem; /* Equivalent to text-h6 for better readability on mobile */
  }
  p {
    font-size: 0.875rem; /* Equivalent to text-body-2 */
  }
}
</style>
