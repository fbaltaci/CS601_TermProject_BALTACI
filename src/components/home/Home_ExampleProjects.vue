<template>
  <h3 class="example-projects__title">Check out some of my work!</h3>
  <div class="example-projects__images">
    <!-- Please note that I really did work on these 
            projects wathcing tutoriol videos from YouTube, and 
            they're not published so I'm not adding any url to those. -->
    <div class="example-projects__img">
      <a href="project1.html"
        ><img
          class="project-img"
          src="../../assets/images/fehmibaltaci.github.io_SushiMan.png"
          alt="SushiMan"
        />
        <p>SushiMan</p>
      </a>
    </div>
    <div class="example-projects__img">
      <a href="project2.html">
        <img
          class="project-img"
          src="../../assets/images/netflix_clone.png"
          alt="Project 2"
        />
        <p>Netlfix Clone</p>
      </a>
    </div>
    <!-- Adding style for images if they're too big, 
            but I will redesign them with css later. -->
  </div>
  <router-link to="/portfolio" class="example-projects__button btn"
    >See all of my works!</router-link
  >
</template>

<script>
export default {};
</script>
