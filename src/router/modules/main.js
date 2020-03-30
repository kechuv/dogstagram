import Default from "@/layouts/default.vue";

// import Home from "@/views/Home.vue";
// const About = () => import(/* webpackChunkName: "about" */ "@/views/About.vue");
const AllPhotos = () =>
  import(/* webpackChunkName: "about" */ "@/views/AllPhotos.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Default,
    children: [
      {
        path: "",
        component: AllPhotos
      }
    ]
  }
];

export default routes;
