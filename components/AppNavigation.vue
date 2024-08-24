<template>
  <v-app-bar>
    <v-app-bar-title
      class="font-weight-black text-uppercase pointer"
      @click="navigateToHome"
    >
      Happy Tours
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      variant="elevated"
      target="_blank"
      href="https://wa.me/306981712060"
      class="d-none d-sm-flex pa-3 mr-3"
      color="success"
      rounded
    >
      <v-icon size="24" class="me-2">mdi-whatsapp</v-icon>
      +30 698 171 2060
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
