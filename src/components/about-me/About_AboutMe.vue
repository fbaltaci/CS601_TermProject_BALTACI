<template>
  <section class="about-me">
    <h2 class="about-me__title">About Me</h2>
    <h1 class="about-me__subtitle">
      I'm a Software Engineer based in Boston, MA
    </h1>
    <p class="about-me__description">{{ aboutMeContent }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aboutMeContent: `
        Since 2017 I've been enjoying the North East area. From then till now, 
        I worked with different companies and met a lot of interesting people. 
        After gaining enough experience, I decided to continue my education and 
        applied for a master's degree at BU. Now, I'm getting my master's degree 
        from Boston University and will be finishing it soon!
      `,
    };
  },
};
</script>
