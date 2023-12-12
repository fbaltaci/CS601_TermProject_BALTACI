<template>
  <section class="turkey-food">
    <h2 class="turkey-food__title">Food</h2>
    <p class="turkey-food__description">{{ turkeyFoodContent }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      turkeyFoodContent: `
      Turkish cuisine offers a range of flavors, with dishes like kebabs,
      baklava, and Turkish delight. Street food, such as simit and döner, is
      also very popular.`,
    };
  },
};
</script>
