import { h } from "vue";
import { useLayoutFactory } from "./useLayoutFactory";

export const layoutFactory = ({
  LAYOUTS,
  defaultLayout,
  LayoutComponent,
  layoutComponents,
}) => {
  /**
   * Initialize state for the LayoutComponent
   */
  const { useLayout } = useLayoutFactory({
    LAYOUTS,
    defaultLayout,
    layoutComponents,
  });

  // Functinal wrapper component
  const Component = (props, { attrs, slots }) => {
    // Add useLayout function as a prop to be passed to the LayoutComponent
    const options = { useLayout, ...props, ...attrs };
    return h(LayoutComponent, options, slots);
  };

  return {
    useLayout,
    LayoutComponent: Component,
  };
};
