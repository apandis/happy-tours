import { defineStore } from "pinia";

export const useMessagesStore = defineStore("messages", {
  state: () => ({
    messages: [] as string[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchMessages() {
      this.loading = true;
      this.error = null;
      try {
        // Assuming your API is at /api/messages
        const response = await $fetch("/api/messages");
        this.messages = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch messages";
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    messageCount: (state) => state.messages.length,
  },
});
