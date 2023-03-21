import { createContext } from "react";

type ThemeContextType = {
  themeUpdate: any;
  theme: string;
};

const Context = createContext<ThemeContextType>({
  themeUpdate: null,
  theme: "",
});
let ContextProvider = Context.Provider;
let ContextConsumer = Context.Consumer;
export { ContextProvider, ContextConsumer, Context };
