import { createWebHistory, createRouter } from "vue-router";
import Welcome from "./pages/Welcome.vue";
import About from "./pages/About.vue";
import News from "./pages/News.vue";
import Kepengurusan from "./pages/Kepengurusan.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import DetailNews from "./pages/DetailNews.vue";
import Gallery from "./pages/Gallery.vue";


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
    path: "/detailNews",
    name: "DetailNews",
    component: DetailNews,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
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
