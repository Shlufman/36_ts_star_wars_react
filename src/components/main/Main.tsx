import React from 'react';
import {Hero} from "../hero";
import {Friends} from "../friends";
import {FarGalaxy} from "../far_galaxy";

const Main = () =>
{
    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </main>
    );
};

 export {Main}; //default