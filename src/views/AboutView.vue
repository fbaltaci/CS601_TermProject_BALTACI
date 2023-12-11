<template>
  <div class="about">
    <main>
      <section class="about-me container">
        <About_AboutMe />
      </section>
      <section class="my-facts container">
        <About_MyFacts />
      </section>
      <section class="my-knowledge container">
        <About_MyKnowledge />
      </section>
      <section class="my-career container">
        <About_MyCareer />
      </section>
    </main>
  </div>
</template>

<script>
import About_AboutMe from "@/components/about-me/About_AboutMe.vue";
import About_MyCareer from "@/components/about-me/About_MyCareer.vue";
import About_MyFacts from "@/components/about-me/About_MyFacts.vue";
import About_MyKnowledge from "@/components/about-me/About_MyKnowledge.vue";

export default {
  name: "AboutView",
  components: {
    About_AboutMe,
    About_MyCareer,
    About_MyFacts,
    About_MyKnowledge,
  },
};
</script>
