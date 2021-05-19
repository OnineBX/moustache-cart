import React from "react";
import { CartItemProps } from "./components/CartItem";

export const AppContext = React.createContext(
    [] as CartItemProps[],
);
