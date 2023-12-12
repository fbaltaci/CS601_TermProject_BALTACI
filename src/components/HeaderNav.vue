<template>
  <div class="header__icon">
    <router-link to="/">FehmiBaltaci</router-link>
  </div>
  <nav>
    <ul class="header__menu" :class="{ hide: hideNavMenu }">
      <li>
        <router-link class="header__link" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="header__link" to="/about">About</router-link>
      </li>
      <li>
        <router-link class="header__link" to="/portfolio"
          >Portfolio</router-link
        >
      </li>
      <li>
        <router-link class="header__link" to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link class="header__link" to="/turkey">Turkey</router-link>
      </li>
      <li>
        <a class="header__link" href="https://www.linkedin.com/" target="_blank"
          >LinkedIn</a
        >
      </li>
      <li>
        <a class="header__link" href="https://www.github.com/" target="_blank"
          >GitHub</a
        >
      </li>
    </ul>
    <button
      class="header__bars"
      :class="{ hide: hideToggle }"
      @click="toggleMobileNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </nav>

  <!-- START - MOBILE NAV - START -->
  <div class="mobile-nav" :class="{ 'mobile-nav--active': isMobileNavVisible }">
    <ul class="mobile-nav__menu">
      <li>
        <router-link class="mobile-nav__link" to="/" @click="toggleMobileNav"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          class="mobile-nav__link"
          to="/about"
          @click="toggleMobileNav"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          class="mobile-nav__link"
          to="/portfolio"
          @click="toggleMobileNav"
          >Portfolio</router-link
        >
      </li>
      <li>
        <router-link
          class="mobile-nav__link"
          to="/contact"
          @click="toggleMobileNav"
          >Contact</router-link
        >
      </li>
      <li>
        <router-link
          class="mobile-nav__link"
          to="/turkey"
          @click="toggleMobileNav"
          >Turkey</router-link
        >
      </li>

      <li>
        <a class="mobile-nav__link" href="https://www.linkedin.com/"
          >LinkedIn</a
        >
      </li>
      <li>
        <a class="mobile-nav__link" href="https://github.com/">GitHub</a>
      </li>
    </ul>
  </div>
  <!-- END - MOBILE NAV - END -->
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      isMobileNavVisible: false,
      isToggleVisible: window.innerWidth > 768,
      hideHeaderBars: window.innerWidth > 768,
      hideNavMenu: window.innerWidth < 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.hideHeaderBars = this.windowWidth > 768;
      this.hideNavMenu = window.innerWidth < 768;
      this.hideToggle = window.innerWidth > 768;
    },
    toggleMobileNav() {
      this.isMobileNavVisible = !this.isMobileNavVisible;
    },
    hideToggle() {
      this.isToggleVisible = !this.isToggleVisible;
    },
  },
};
</script>

<style scoped>
/* START - HEADER - START */
/* START - HEADER - START */
/* START - HEADER - START */

.header__icon {
  margin-right: auto;
}

.header__icon a {
  text-decoration: none;
}

/* .header__menu {
  display: none;
} */

.header__bars {
  color: var(--clr-light);
  width: var(--size-2xl);
  height: var(--size-2xl);

  position: absolute;
  z-index: 999;
  display: block;
}

/* END - HEADER - END */
/* END - HEADER - END */
/* END - HEADER - END */

/* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */
/* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */
/* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */ /* START - MOBILE NAV - START */

.mobile-nav {
  position: absolute;

  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100vh;
  background-color: var(--clr-dark);

  /* display none to have it not seen at first */
  display: none;

  justify-content: center;
  align-items: center;
  text-align: center;
}

.mobile-nav__menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.mobile-nav__link {
  font-size: var(--size-sm);
  text-decoration: none;
  font-weight: 600;
  color: var(--clr-slate600);
  letter-spacing: -0.05em;
  transition: color 0.3s;
}

.mobile-nav__link:hover {
  color: var(--clr-rose);
}

.mobile-nav {
  display: none;
}

.mobile-nav--active {
  display: flex;
}

.hide {
  display: none;
}
/* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */
/* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */
/* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */ /* END - MOBILE NAV - END */
</style>
