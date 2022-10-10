import { createContext, ReactNode, useState } from "react";

interface IPropsProviders {
    time: number;
    setTime: (value: number) => void;
}

export const Context = createContext({} as IPropsProviders);

export interface INode {
    children: ReactNode;
}

export const ContextProvider = ({ children }: INode) => {
    const [time, setTime] = useState(0);

    return (
        <Context.Provider value={{ time, setTime }}>
            {children}
        </Context.Provider>
    );
};
