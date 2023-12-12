<template>
  <section class="turkey-places">
    <h2 class="turkey-places__title">Nice Places to Visit in Turkey</h2>
    <ul>
      <!-- get the info from data with for loop -->
      <!-- and create a method and attach that to the li item, 
        if user clicks on the place, more detail will be shared -->
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
    // we're deciding if we want to add more details to the place or not.
    // if user click on the place, we will switch it and show more details about the place
    toggleDetails(place) {
      place.showDetails = !place.showDetails;
    },
  },
};
</script>
