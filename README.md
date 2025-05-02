# Happy Tours - Nuxt 3 Application

Welcome to the Happy Tours project! This is a Nuxt 3 application designed to help users book tours and explore various travel destinations.

## Documentation

For more information about Nuxt 3, please refer to the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Features

- Browse and book tours
- View detailed information about each tour
- Responsive design for mobile and desktop
- Integration with an API server to fetch tour data

## API Endpoints

### `GET /api/tours`

Fetch all tours.

**Example Response:**

```json
[
  {
    "slug": "blue-lagoon-sivota",
    "title": "Blue Lagoon Sivota",
    "metaTitle": "Blue Lagoon Sivota - Happy Tours",
    "metaDescription": "Enjoy a short trip to the beautiful Blue Lagoon. Swim, explore caves, and fish with all gear provided.",
    "description": "Experience the beauty of the Blue Lagoon in Sivota with our exclusive tour...",
    "imageUrl": "https://www.happy-tours.gr/blue-lagoon-beach.jpg"
  }
  // ... other tours
]
```

### `GET /api/tours/:slug`

Fetch a specific tour by slug.

**Example Response:**

```json
{
  "slug": "blue-lagoon-sivota",
  "title": "Blue Lagoon Sivota",
  "metaTitle": "Blue Lagoon Sivota - Happy Tours",
  "metaDescription": "Enjoy a short trip to the beautiful Blue Lagoon. Swim, explore caves, and fish with all gear provided.",
  "description": "Experience the beauty of the Blue Lagoon in Sivota with our exclusive tour...",
  "imageUrl": "https://www.happy-tours.gr/blue-lagoon-beach.jpg"
}
```

## Using API Endpoints

You can call these endpoints from your frontend components or store actions using `fetch` or `axios`.

### Example using `fetch` in a component

```vue
<template>
  <div>
    <h1>Tours</h1>
    <ul>
      <li v-for="tour in tours" :key="tour.slug">{{ tour.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tours = ref([]);

onMounted(async () => {
  const response = await fetch("/api/tours");
  tours.value = await response.json();
});
</script>
```

### Example using `axios` in a store action

```javascript
import { defineStore } from "pinia";
import axios from "axios";

export const useToursStore = defineStore("tours", {
  state: () => ({
    tours: [],
  }),
  actions: {
    async fetchTours() {
      try {
        const response = await axios.get("/api/tours");
        this.tours = response.data;
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      }
    },
  },
});
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
