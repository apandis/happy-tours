<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>ID Scanner</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="submitForm">
          <v-file-input
            v-model="frontImageFile"
            label="Upload Front ID Image"
            required
            accept="image/*"
            @change="handleFrontImageUpload"
            prepend-icon="mdi-camera"
          ></v-file-input>
          <v-file-input
            v-model="backImageFile"
            label="Upload Back ID Image"
            required
            accept="image/*"
            @change="handleBackImageUpload"
            prepend-icon="mdi-camera"
          ></v-file-input>
          <v-btn type="submit" @click="submitScan">Submit Scan</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const frontImageFile = ref(null);
const backImageFile = ref(null);
const frontImage = ref(null);
const backImage = ref(null);

const handleFrontImageUpload = async (event) => {
  const file = event.target.files[0];
  frontImage.value = await convertImageToBase64(file);
};

const handleBackImageUpload = async (event) => {
  const file = event.target.files[0];
  backImage.value = await convertImageToBase64(file);
};

const submitScan = async () => {
  const url = "https://api2.idanalyzer.com/quickscan";
  const payload = {
    document: frontImage.value,
    documentBack: backImage.value,
    saveFile: true,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
        "X-API-KEY": "P1kmBcTqaNBPcOEDHHRKZ6IQh0ixs6EC",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Success:", data);
    } else {
      const error = await response.json();
      console.error(`Error ${response.status}:`, error);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};
</script>
