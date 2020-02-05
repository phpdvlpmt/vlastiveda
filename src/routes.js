import Home from "./components/Home.vue";
import Czech from "./components/Czech.vue";
import Europe from "./components/Europe.vue";
import States from "./components/States.vue";
import NStates from "./components/NStates.vue";
import Resources from "./components/Resources.vue";
import History from "./components/History.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/ceska-republika", component: Czech },
  { path: "/evropa", component: Europe },
  { path: "/staty", component: States },
  { path: "/sousedni-staty", component: NStates },
  { path: "/zdroje", component: Resources },
  { path: "/dejepis", component: History }
];

export default routes;
