import React from 'react';
import {Home} from "./../home";
import {StarWars} from "./../star_wars";
import {AboutMe} from "./../about_me";
import {Contact} from "./../contact";
import {navItems} from "../../utils/constants";

interface PropsApp{
    activePage:string;
}

const Main :React.FC<PropsApp>= ({activePage}) =>
{
    switch (activePage)
    {
        case navItems[1]: return <AboutMe/>
        case navItems[2]: return <StarWars/>
        case navItems[3]: return <Contact/>
        default: return <Home />
    }
};

 export {Main};