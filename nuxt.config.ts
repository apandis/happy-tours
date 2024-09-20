import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  site: {
    url: "https://happy-tours.gr",
    name: "Happy Tours Kavos",
  },
  sitemap: {
    // excludeAppSources: true,
    exclude: ["/tours/**", "/contact"],
    // sources: ["/api/sitemap"],
  },

  build: {
    transpile: ["vuetify", "v-phone-input"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@zadigetvoltaire/nuxt-gtm",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: "2024-08-27",

  runtimeConfig: {
    public: {},
    private: {
      googleServiceAccountKey: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
    },
  },

  gtm: {
    id: "GTM-TB98SDXR",
    enabled: true,
  },
});
