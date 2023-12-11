<template>
  <nav>
    <ul class="header__menu">
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
    <button class="header__bars">
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
</template>

<script>
export default {};
</script>
