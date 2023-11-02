import React from 'react';
import {Navigation} from "../navigation";

interface PropsHeader {

}

const Header: React.FC<PropsHeader> = () => {
    return (
        <header className="rounded-top-4">
            <Navigation />
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    );
};

export {Header};