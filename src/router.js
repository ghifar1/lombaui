import { createWebHistory, createRouter } from "vue-router";
import Welcome from "./pages/Welcome.vue";
import HelloWorld from "./components/HelloWorld.vue";
import TentangKami from "./pages/TentangKami.vue";

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
  {
    path: "/tentangKami",
    name: "TentangKami",
    component: TentangKami
  }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;