import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
  state: () => ({
    isVisible: false,
    message: "",
    color: "success",
    timeout: 30000,
  }),
  actions: {
    showSnackbar(message, color = "success", timeout = 30000) {
      this.message = message;
      this.color = color;
      this.timeout = timeout;
      this.isVisible = true;
    },
    hideSnackbar() {
      this.isVisible = false;
      this.message = ""; // Reset the message when hiding the snackbar
    },
  },
});
