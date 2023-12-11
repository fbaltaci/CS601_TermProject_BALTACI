<template>
  <div class="home">
    <main>
      <section class="hero container">
        <Home_Hero></Home_Hero>
      </section>
      <section class="example-projects container">
        <Home_ExampleProjects></Home_ExampleProjects>
      </section>
      <section class="audio container">
        <HomeAudio></HomeAudio>
      </section>
    </main>
  </div>
</template>

<script>
import Home_Hero from "@/components/home/Home_Hero.vue";
import Home_ExampleProjects from "@/components/home/Home_ExampleProjects.vue";
import HomeAudio from "@/components/home/Home_Audio.vue";

export default {
  name: "HomeView",
  components: {
    Home_Hero,
    Home_ExampleProjects,
    HomeAudio,
  },
};
</script>
