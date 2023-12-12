<template>
  <section class="turkey-places">
    <h2 class="turkey-places__title">Nice Places to Visit in Turkey</h2>
    <ul>
      <li
        v-for="place in places"
        :key="place.name"
        @click="toggleDetails(place)"
      >
        {{ place.name }}
        <p v-if="place.showDetails">{{ place.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {
          name: "Istanbul",
          description:
            "A city that straddles two continents, rich in history and culture.",
          showDetails: false,
        },
        {
          name: "Cappadocia",
          description:
            "Famous for its unique rock formations and hot air balloon rides.",
          showDetails: false,
        },
        {
          name: "Ephesus",
          description: "An ancient city known for its well-preserved ruins.",
          showDetails: false,
        },
        {
          name: "Pamukkale",
          description:
            "Known for its thermal waters and terraces of carbonate minerals.",
          showDetails: false,
        },
      ],
    };
  },
  methods: {
    toggleDetails(place) {
      place.showDetails = !place.showDetails;
    },
  },
};
</script>
