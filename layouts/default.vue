<template>
  <v-app>
    <AppNavigation />
    <v-main>
      <slot />
    </v-main>
    <AppBottomNavigation class="d-flex d-sm-none" />
  </v-app>
</template>
