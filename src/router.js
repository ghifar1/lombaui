import { createWebHistory, createRouter } from "vue-router";
import Welcome from "./pages/Welcome.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/test",
    name: "Test",
    component: HelloWorld
  },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;