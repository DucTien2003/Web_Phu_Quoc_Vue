import Home from "./views/Home.vue";
import Recomment from "./views/Recomment.vue";
import Experience from "./views/Experience.vue";
import Blog from "./views/Blog.vue";
import Contact from "./views/Contact.vue";
import Service from "./views/Service.vue";
import DetailBlog from "./views/DetailBlog.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/recomment",
    name: "recomment",
    component: Recomment
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/service",
    name: "service",
    component: Service
  },
  {
    path: "/detail-blog",
    name: "detail-blog",
    component: DetailBlog
  }
];
