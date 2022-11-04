import { useLayoutFactory } from "../helpers/useLayoutFactory";

export interface ILayout {
  [key: string]: symbol;
};
export const LAYOUTS: ILayout = {
  auth: Symbol("auth"),
  standard: Symbol("standard"),
};

const { useLayout } = useLayoutFactory({ LAYOUTS, defaultLayout: LAYOUTS.standard, layoutComponents: {} });

export { useLayout };
