<template>
  <div class="portfolio">
    <main>
      <section class="portfolio container">
        <PortfolioTitle />
      </section>
      <section class="my-projects container">
        <PortfolioMyProjects />
      </section>
    </main>
  </div>
</template>

<script>
import PortfolioMyProjects from "@/components/portfolio/PortfolioMyProjects.vue";
import PortfolioTitle from "@/components/portfolio/PortfolioTitle.vue";

export default {
  name: "PortfolioView",
  components: {
    PortfolioTitle,
    PortfolioMyProjects,
  },
};
</script>
