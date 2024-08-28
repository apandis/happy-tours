<template>
  <v-form ref="form">
    <v-container>
      <v-row>
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
        <v-col cols="12">
          <v-text-field
            label="Phone Number"
            placeholder="+30 123 456 7890"
            type="tel"
            v-model="phoneNumber"
            :rules="[rules.required('Phone number'), rules.phoneNumber]"
            hide-details="auto"
            required
          ></v-text-field>
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
            label="Preffered Date"
            placeholder="mm/dd/yyyy"
            v-model="preferredDate"
            :rules="[rules.required('Preferred date')]"
            hide-details="auto"
            :min="today"
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
            :rules="[rules.required('Group Size'), rules.groupSize]"
            hide-details="auto"
            required
          ></v-number-input>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="bio"
            label="Special Requests"
            rows="3"
            auto-grow
            hide-details
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn @click="submitForm">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from "vue";

// Define form references and data
const form = ref(null);
const fullName = ref("");
const emailAddress = ref("");
const phoneNumber = ref("");
const preferredCruise = ref("");
const preferredDate = ref();
const groupSize = ref();
const specialRequests = ref("");
const today = ref(new Date()); // Get today's date

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

const submitForm = async () => {
  if (form.value) {
    // Validate the form using the validate() method
    const validationResult = await form.value.validate();

    // Check if the form is valid
    if (validationResult.valid) {
      console.log("Form submitted!");
    } else {
      console.log("Validation failed.");
      // Handle the error messages
      validationResult.errors.forEach((error) => {
        console.error(
          `Error in ${error.id}: ${error.errorMessages.join(", ")}`
        );
      });
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
