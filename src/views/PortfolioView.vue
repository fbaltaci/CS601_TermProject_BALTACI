<template>
  <!-- Adding my components to the each view here -->
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
// Importing components
import PortfolioMyProjects from "@/components/portfolio/PortfolioMyProjects.vue";
import PortfolioTitle from "@/components/portfolio/PortfolioTitle.vue";

export default {
  name: "PortfolioView",
  components: {
    // defining components so we can use them in the view.
    PortfolioTitle,
    PortfolioMyProjects,
  },
};
</script>
