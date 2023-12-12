<template>
  <div class="turkey">
    <main>
      <section class="turkey container">
        <Turkey_Culture />
        <Turkey_Food />
        <Turkey_Weather />
        <Turkey_Places />
      </section>
    </main>
  </div>
</template>

<script>
import Turkey_Culture from "@/components/turkey_thecountry/Turkey_Culture.vue";
import Turkey_Food from "@/components/turkey_thecountry/Turkey_Food.vue";
import Turkey_Weather from "@/components/turkey_thecountry/Turkey_Weather.vue";
import Turkey_Places from "@/components/turkey_thecountry/Turkey_Places.vue";

export default {
  name: "TurkeyView",
  components: {
    Turkey_Culture,
    Turkey_Food,
    Turkey_Weather,
    Turkey_Places,
  },
};
</script>
