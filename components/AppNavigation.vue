<template>
  <v-app-bar>
    <v-app-bar-title
      class="font-weight-black text-uppercase pointer"
      @click="navigateToHome"
    >
      Happy Tours
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn variant="plain" to="/bookings" class="d-none d-sm-flex">
      Bookings
    </v-btn>
    <template v-slot:append>
      <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const router = useRouter();

const navigateToHome = () => {
  router.push({ path: "/" });
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
