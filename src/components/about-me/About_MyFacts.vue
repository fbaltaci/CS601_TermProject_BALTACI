<template>
  <section class="my-facts">
    <h2 class="my-facts__subtitle">Random facts about me</h2>
    <ul class="my-facts__list">
      <!-- for loop the facts and get the fact inside of it one by one -->
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
      ],
    };
  },
};
</script>
