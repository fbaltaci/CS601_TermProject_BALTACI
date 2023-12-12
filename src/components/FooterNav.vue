<template>
  <footer class="footer container">
    <div class="footer-nav__copyright">
      <a
        class="footer-nav__link"
        href="https://www.linkedin.com/"
        target="_blank"
        >&copy; 2023 Coded by FehmiBaltaci</a
      >
    </div>
    <!-- using router link in the menu so we can switch the pages -->
    <nav>
      <ul class="footer-nav__menu">
        <li>
          <router-link to="/" class="footer-nav__link">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="footer-nav__link">About</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="footer-nav__link"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="footer-nav__link"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>
