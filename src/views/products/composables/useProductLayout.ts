import { layoutFactory } from "../../../layout/helpers/layoutFactory";
// Component imports
import GridLayout from "../../../layout/components/GridLayout.vue";
import ListLayout from "../../../layout/components/ListLayout.vue";
import ProductLayoutComponent from "../../../layout/ProductLayout.vue";

const LAYOUTS = {
  grid: Symbol("grid"),
  list: Symbol("list"),
};

const layoutComponents = {
  [LAYOUTS.grid]: GridLayout,
  [LAYOUTS.list]: ListLayout,
};

/**
 * Initialize the layour factory that returns a Layour component
 * with injected useLayout vie aprops
 */
const {
  useLayout: useProductLayout,
  LayoutComponent: ProductLayout,
} = layoutFactory({
  LAYOUTS,
  layoutComponents,
  defaultLayout: LAYOUTS.grid,
  LayoutComponent: ProductLayoutComponent,
});

export { useProductLayout, ProductLayout, LAYOUTS };
