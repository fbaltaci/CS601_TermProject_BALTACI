import { createRouter, createWebHashHistory } from "vue-router";

// imported my routers here
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";
import TurkeyView from "../views/TurkeyView.vue";

// rooters that will be showed to the user.
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/portfolio",
    name: "PortfolioView",
    component: PortfolioView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/turkey",
    name: "TurkeyView",
    component: TurkeyView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
