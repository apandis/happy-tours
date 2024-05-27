<template>
  <v-bottom-navigation grow tile active>
    <v-btn to="/">
      <v-icon>mdi-calendar-check</v-icon>
      <span>Availability</span>
    </v-btn>
    <v-btn to="/bookings">
      <v-icon>mdi-clipboard-list-outline</v-icon>
      <span>Bookings</span>
    </v-btn>
    <v-btn to="/">
      <v-icon>mdi-account-box-outline</v-icon>
      <span>Account</span>
    </v-btn>
  </v-bottom-navigation>
</template>
