import {
  createRouter,
  RouteRecordRaw,
  createWebHistory,
} from "vue-router";

// Components
import LayoutExample from "../views/LayoutExample.vue";
import ProductLayoutExample from "../views/products/ProductLayoutExample.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "LayoutExample",
    component: LayoutExample,
  },
  {
    path: "/layout/standard",
    name: "LayoutStandard",
    component: LayoutExample,
    meta: {
      layout: "standard",
    },
  },
  {
    path: "/layout/auth",
    name: "Home",
    component: LayoutExample,
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/products",
    name: "ProductsLayoutExample",
    component: ProductLayoutExample,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
