import { ref, computed } from "vue";

export const useLayoutFactory = ({
  LAYOUTS,
  defaultLayout,
  layoutComponents,
}) => {
  const layout = ref(defaultLayout);

  const currentLayoutComponent = computed(() =>
    layoutComponents[layout.value],
  );

  const setLayout = (layoutType: any) => {
    layout.value = layoutType;
  };

  const useLayout = () => ({
    layout,
    LAYOUTS,
    setLayout,
    currentLayoutComponent,
  });

  return {
    useLayout
  };
};
