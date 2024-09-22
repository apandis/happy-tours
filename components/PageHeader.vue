<template>
  <header :style="headerStyles">
    <div class="overlay"></div>
    <v-container class="py-5 fill-height">
      <v-row
        justify="center"
        align="center"
        class="text-center text-shadow fill-height"
      >
        <v-col cols="12" md="8">
          <h1 class="text-white">{{ title }}</h1>
          <p class="text-white">{{ description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  description: String,
  backgroundImage: String,
  headerHeight: String,
});

const headerStyles = computed(() => ({
  backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : "",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: props.headerHeight || "300px",
  position: "relative",
}));
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

header {
  position: relative;
  overflow: hidden;
}

.text-center {
  position: relative;
  z-index: 2;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
