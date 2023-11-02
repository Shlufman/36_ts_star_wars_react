import React from 'react';
import {StarWarContext} from "../../utils/starWarContext";
import {TNavItem} from "../../utils/constants";

interface Props{
    text:TNavItem;
}

const NavItem: React.FC<Props> = ({text}) =>
{
    return (
        <StarWarContext.Consumer>
            {value=><li className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-button"
                        onClick={() => value.changePage(text)}>{text}</li>}
        </StarWarContext.Consumer>
    );
};

export {NavItem};//default