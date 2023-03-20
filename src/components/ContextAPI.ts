import { createContext } from "react";

const Context = createContext({});
let ContextProvider = Context.Provider;
let ContextConsumer: {} = Context.Consumer;
export { ContextProvider, ContextConsumer, Context };
