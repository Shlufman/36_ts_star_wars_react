import React from 'react';

const Hero = () =>
{
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img src={require("../../styles/images/main.jpg")} className="w-100"/>
        </section>
    );
};

export {Hero};//default