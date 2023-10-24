import React from 'react';
import {Hero} from "../hero";
import {Friends} from "../friends";
import {FarGalaxy} from "../far_galaxy";
import {TFriendItem, TNavItem} from "../../utils/constants";

interface PropsApp{
    friendItems :Array<TFriendItem>;
    navItems:Array<TNavItem>;
    urlImageSrc:string;
}
const Main :React.FC<PropsApp>= (props) =>
{
    return (
        <main className="clearfix">
            <Hero/>
            <Friends {...props}/>
            <FarGalaxy/>
        </main>
    );
};

 export {Main}; //default