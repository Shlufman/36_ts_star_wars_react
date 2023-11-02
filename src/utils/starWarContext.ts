import React, {createContext} from "react";
import {TFriendItem, TNavItem} from "./constants";
import {TFChangePage} from "../data/StateProviderApp";

type TContext ={
    namePlanets? : Array<string>;
    friendItems?: Array<TFriendItem>;
    changePage: TFChangePage;
    navItems: Array<TNavItem>;
    activePage: TNavItem;
}

export const StarWarContext = createContext<TContext>({} as TContext);