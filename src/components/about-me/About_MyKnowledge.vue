<template>
  <section class="my-knowledge">
    <h1 class="my-knowledge__title">What do I know?</h1>
    <p class="my-knowledge__description">
      Since high school, I have been interested in the web and how it works.
      Finally, I'm in the industry working as an engineer and also freelance.
    </p>
    <div class="my-knowledge__skills">
      <!-- for loop the skills here -->
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="my-knowledge__skills-item"
      >
        <!-- attach the imageSrc and name here to the img element -->
        <img
          :src="skill.imageSrc"
          :alt="skill.name"
          class="my-knowledge__skills-item__img"
        />
        <!-- attach the name here again -->
        <h3 class="my-knowledge__skills-item__title">{{ skill.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "HTML", imageSrc: require("../../assets/images/html.png") },
        { name: "CSS", imageSrc: require("../../assets/images/css.png") },
        { name: "JavaScript", imageSrc: require("../../assets/images/js.png") },
      ],
    };
  },
};
</script>
