import React from 'react';
import style from './StarWar.module.css';
import {starsWarInfo} from "../../utils/constants";

const StarWars = () => {
    return (
        <div className={style.content}>
            {starsWarInfo.map(p=><p>{p}</p>)}
        </div>
    );
};

export {StarWars};