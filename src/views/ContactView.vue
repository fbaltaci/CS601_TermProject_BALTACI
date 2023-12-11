<template>
  <div class="about">
    <section class="contact-me container">
      <Contact_ContactMe />
    </section>
    <section class="send-email container">
      <Contact_SendEmail />
    </section>
  </div>
</template>

<script>
import Contact_ContactMe from "@/components/contact/Contact_ContactMe.vue";
import Contact_SendEmail from "@/components/contact/Contact_SendEmail.vue";

export default {
  name: "ContactView",
  components: {
    Contact_ContactMe,
    Contact_SendEmail,
  },
};
</script>
