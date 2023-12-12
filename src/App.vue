<template>
  <!-- I have my navigation menu here -->
  <header class="header container">
    <HeaderNav />
  </header>

  <router-view />

  <!-- I have my footer menu here -->
  <footer class="footer container">
    <FooterNav />
  </footer>
</template>

<script>
// importing components for the App.vue
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
  components: {
    // defining header and footer components here so they can be used on the page.
    HeaderNav,
    FooterNav,
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  position: relative;
  z-index: 9999;

  /* border: 2px solid red; */
}
</style>
