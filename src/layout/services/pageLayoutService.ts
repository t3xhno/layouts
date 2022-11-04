import { reactive } from "vue";

// Available layouts
export const LAYOUTS = {
  auth: Symbol("auth"),
  standard: Symbol("standard"),
};

const initialState = {
  layout: LAYOUTS.standard,
};

const state = reactive(initialState);

export const layoutComputed = {
  layout: {
    get() {
      return state.layout;
    },
    set(layoutType: any) {
      state.layout = layoutType;
    },
  },
};

export const setLayout = (layoutType: any) => state.layout = layoutType;
