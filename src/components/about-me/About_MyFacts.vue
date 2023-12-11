<template>
  <section class="my-facts">
    <h2 class="my-facts__subtitle">Random facts about me</h2>
    <ul class="my-facts__list">
      <li
        v-for="(fact, index) in facts"
        :key="index"
        class="my-facts__list-item"
      >
        {{ fact }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      facts: [
        "I ride a motorcycle.",
        "I love to eat and taste different foods/cuisine.",
        "I usually watch the same TV shows/movies.",
        // Add more facts as needed
      ],
    };
  },
};
</script>
