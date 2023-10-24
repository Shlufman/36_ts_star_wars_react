import React from 'react';

interface PropsHero {
}

const Hero: React.FC<PropsHero> = () => {
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img src={require("../../styles/images/main.jpg")} className="w-100"/>
        </section>
    );
};

export {Hero};//default