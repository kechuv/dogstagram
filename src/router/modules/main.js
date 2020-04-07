import Default from "@/layouts/default";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
    ],
  },
];

export default routes;
