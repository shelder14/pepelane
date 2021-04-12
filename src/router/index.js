import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Vehincle from "../views/Vehincle.vue"
import Specifications from "../views/Specifications.vue"
import Team from "../views/Team.vue"
import RentTerms from "../views/RentTerms.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/vehincle/:id",
    name: "Vehincle",
    component: Vehincle,
    children: [
      {
        path: "specifications",
        component: Specifications,
      },
      {
        path: "team",
        component: Team,
      },
      {
        path: "rentterms",
        component: RentTerms,
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router