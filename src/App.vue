<template>
  <!-- I have my navigation menu here -->
  <header class="header container">
    <HeaderIcon></HeaderIcon>
    <HeaderNav></HeaderNav>
  </header>

  <router-view />

  <!-- I have my footer menu here -->
  <footer class="footer container">
    <FooterNav></FooterNav>
  </footer>
</template>

<script>
import HeaderIcon from "@/components/HeaderIcon.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
  components: {
    HeaderIcon,
    HeaderNav,
    FooterNav,
  },
};
</script>

<style></style>
