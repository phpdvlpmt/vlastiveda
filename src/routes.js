import Home from "./components/Home.vue";
import Czech from "./components/Czech.vue";
import Europe from "./components/Europe.vue";
import States from "./components/States.vue";
import NStates from "./components/NStates.vue";
import Resources from "./components/Resources.vue";
import History from "./components/History.vue";
import Cas from "./components/Cas.vue";
import Pravek from "./components/Pravek.vue";
import Rozcesti from "./components/Rozcesti.vue";
import Slovane from "./components/Slovane.vue";
import Samo from "./components/Samo.vue";
import Habsburkove from "./components/Habsburkove.vue";
import Povesti from "./components/Povesti.vue";
import Morava from "./components/Morava.vue";
import Terezie from "./components/Terezie.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/ceska-republika", component: Czech },
  { path: "/evropa", component: Europe },
  { path: "/staty", component: States },
  { path: "/sousedni-staty", component: NStates },
  { path: "/zdroje", component: Resources },
  {
    path: "/dejepis",
    component: History,
    children: [
      {
        path: "/",
        component: Rozcesti
      },
      {
        path: "cas",
        component: Cas
      },
      {
        path: "pravek",
        component: Pravek
      },
      {
        path: "slovane",
        component: Slovane
      },
      {
        path: "samo",
        component: Samo
      },
      {
        path: "habsburkove",
        component: Habsburkove
      },
      {
        path: "povesti",
        component: Povesti
      },
      {
        path: "morava",
        component: Morava
      },
      {
        path: "terezie",
        component: Terezie
      }
    ]
  },
  { path: "/cas", component: Cas },
  { path: "/pravek", component: Pravek }
];

export default routes;
