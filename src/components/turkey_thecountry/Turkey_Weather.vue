<template>
  <section class="turkey-weather">
    <h2 class="turkey-weather__title">Weather</h2>
    <p class="turkey-weather__description">{{ turkeyWeatherContent }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      turkeyWeatherContent: `
        Turkey experiences a variety of climates. The coastal areas enjoy a
      Mediterranean climate, while the interior has a continental climate with
      hot summers and cold winters.`,
    };
  },
};
</script>
