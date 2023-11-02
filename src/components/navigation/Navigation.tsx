import React from 'react';
import {NavItem} from "../nav_item";
import {StarWarContext} from "../../utils/starWarContext";

interface PropsNavigation {
}

const Navigation: React.FC<PropsNavigation> = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                <StarWarContext.Consumer>
                    {value => value.navItems.map(item => <NavItem key={item} text={item}/>)}
                </StarWarContext.Consumer>

            </ul>
        </nav>
    );
};

export {Navigation};