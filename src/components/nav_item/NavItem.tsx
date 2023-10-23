import React from 'react';

interface Props{
    text:string;
}

interface State{

}

const NavItem: React.FC<Props> = ({text}) =>
{
    return <li className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-button">{text}</li>;
};

export {NavItem};//default