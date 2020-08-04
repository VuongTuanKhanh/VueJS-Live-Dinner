import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue")
  },
  {
    path: "/pages",
    name: "Pages",
    component: () => import("../views/Pages.vue")
  },
  {
    path: "/stuff",
    name: "Stuff",
    component: () => import("../views/Stuff.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue")
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () => import("../views/Reservation.vue")
  },
  {
    path: "/blog-detail",
    name: "Detail",
    component: () => import("../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
