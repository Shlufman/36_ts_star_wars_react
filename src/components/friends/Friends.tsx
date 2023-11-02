import React from 'react';
import {Friend} from "../friend";
import {StarWarContext} from "../../utils/starWarContext";

interface PropsFriends {

}

const Friends: React.FC<PropsFriends> = () => {
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            <StarWarContext.Consumer>
                {value => value.friendItems?.map((item, index) => <Friend key={index} className="col-4 p-1"
                                                                          srcImage={item.src} alt={item.alt}/>)}
            </StarWarContext.Consumer>
        </section>
    );
};

export {Friends};