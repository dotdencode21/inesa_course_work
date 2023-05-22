import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createRouter, createWebHashHistory } from "vue-router";

import store from "./store";
import routes from "./router";

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.use(store);
app.use(router);

app.mount("#app");
