import { createApp } from "vue";
import App from "./App.vue";
// imported the router in order to have multiple views in the project
import router from "./router";
// importing the css file we have for the whole project
import "./styles/global-styles.css";

// create
// use router for the views
// mount to the page

createApp(App).use(router).mount("#app");
