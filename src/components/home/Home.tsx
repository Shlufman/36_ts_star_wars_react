import React from 'react';
import {Hero} from "./../hero";
import {Friends} from "./../friends";
import {FarGalaxy} from "./../far_galaxy";

interface PropsHome {

}

const Home: React.FC<PropsHome> = () => {
    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export {Home};