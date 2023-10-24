import React from 'react';
import {Friend} from "../friend";
import {TNavItem, TFriendItem} from "../../utils/constants";


interface PropsFriends {
    friendItems: Array<TFriendItem>;
    urlImageSrc: Array<TNavItem>;
}

const Friends: React.FC<PropsFriends> = ({friendItems, urlImageSrc}) => {
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            {friendItems.map((item, index) => <Friend key={index} className="col-4 p-1" baseUrl={urlImageSrc}
                                                      srcImage={item.src} alt={item.alt}/>)}
        </section>
    );
};
//../../styles/images/
export {Friends};//default