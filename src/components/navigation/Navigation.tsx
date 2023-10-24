import React from 'react';
import {TNavItem} from "../../utils/constants";
import {NavItem} from "../nav_item";

interface PropsNavigation{
    navItems:Array<TNavItem>;
}

const Navigation:React.FC<PropsNavigation> = ({navItems}) =>
{
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                {navItems.map(item => <NavItem key={item} text={item}/>)}
            </ul>
        </nav>
    );
};

export {Navigation}; //default