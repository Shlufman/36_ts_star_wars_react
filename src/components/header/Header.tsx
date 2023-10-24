import React from 'react';
import {Navigation} from "../navigation";
import {TNavItem} from "../../utils/constants";

interface PropsHeader {
    navItems:Array<TNavItem>;
}

const Header: React.FC<PropsHeader> = (props) => {
    return (
        <header className="rounded-top-4">
            <Navigation {...props}/>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    );
};

export {Header}; //default