<template>
  <v-container class="pa-sm-6 pa-md-12" fluid>
    <v-responsive class="text-center mx-auto" max-width="700">
      <p class="font-weight-medium text-primary">Develop faster</p>

      <p class="mt-2 text-h5 font-weight-bold text-md-h4">
        Everything you need to build a great app.
      </p>

      <p class="mt-4 text-body-1 text-medium-emphasis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </p>
    </v-responsive>

    <v-row class="mt-8">
      <v-col
        v-for="(item, i) in features"
        :key="i"
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-responsive class="mx-auto" max-width="500" width="100%">
          <v-list-item class="px-0" rounded="lg" :subtitle="item.subtitle">
            <template #title>
              <p class="text-body-2 font-weight-bold pb-2">
                <v-icon
                  class="mr-2"
                  color="primary"
                  :icon="item.icon"
                  size="small"
                />

                {{ item.title }}
              </p>
            </template>

            <v-chip
              append-icon="mdi-arrow-right"
              class="mt-6"
              color="primary"
              link
              size="small"
              text="Learn more"
            />
          </v-list-item>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const features = [
  {
    title: "Push to deploy",
    subtitle:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.",
    icon: "mdi-cloud-upload",
  },
  {
    title: "SSL certificates",
    subtitle:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    icon: "mdi-lock",
  },
  {
    title: "Simple queues",
    subtitle:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    icon: "mdi-sync",
  },
];
</script>
