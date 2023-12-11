<template>
  <div>
    <h2 class="contact-me__title">Contact</h2>
    <h1 class="contact-me__subtitle">
      Get in touch with me via social media or email
    </h1>
    <div class="contact-me__contact-links">
      <!-- Use v-for to iterate over socialMediaLinks array -->
      <div
        v-for="(link, index) in socialMediaLinks"
        :key="index"
        class="contact-me__contact-link-item"
      >
        <!-- Use a method to generate the social media link -->
        <a :href="link.url" target="_blank">
          <img
            :class="['contacts-img', link.iconClass]"
            :src="link.iconSrc"
            :alt="link.altText"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMediaLinks: [
        {
          url: "https://www.linkedin.com/",
          iconSrc: require("../../assets/images/linkedin.png"),
          iconClass: "linkedin",
          altText: "LinkedIn",
        },
        {
          url: "https://www.facebook.com/",
          iconSrc: require("../../assets/images/facebook.png"),
          altText: "Facebook",
        },
        {
          url: "https://www.instagram.com/",
          iconSrc: require("../../assets/images/instagram.png"),
          altText: "Instagram",
        },
      ],
    };
  },
};
</script>
