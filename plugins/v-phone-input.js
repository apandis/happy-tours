import "flag-icons/css/flag-icons.min.css";
import "v-phone-input/dist/v-phone-input.css";
import { createVPhoneInput } from "v-phone-input";

export default defineNuxtPlugin((nuxtApp) => {
  const vPhoneInput = createVPhoneInput({
    countryIconMode: "svg",
    displayFormat: "international",
    countryLabel: "",
  });

  nuxtApp.vueApp.use(vPhoneInput);
});
