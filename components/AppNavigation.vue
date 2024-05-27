<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title class="font-weight-black text-uppercase pointer" @click="navigateToHome">
      Happy Tours
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn variant="plain" to="/bookings" class=""> Bookings </v-btn>
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
