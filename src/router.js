import { createWebHistory, createRouter } from "vue-router";
import Welcome from "./pages/Welcome.vue";
import TentangKami from "./pages/TentangKami.vue";
import News from "./pages/News.vue";
import Kepengurusan from "./pages/Kepengurusan.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import DetailsNews from "./pages/DetailsNews.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/detailsNews",
    name: "DetailsNews",
    component: DetailsNews,
  },
  {
    path: "/tentangKami",
    name: "TentangKami",
    component: TentangKami,
  },
  {
    path: "/kepengurusan",
    name: "Kepengurusan",
    component: Kepengurusan,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router;
