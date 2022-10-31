import { createContext, ReactNode } from "react";

export const Context = createContext({});

export interface INode {
    children: ReactNode;
}

export const ContextProvider = ({children}: INode) => {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
};