import React from 'react';
import {Friend} from "../friend";
import {friendItems, urlImageSrc} from "../../utils/constants";


const Friends = () => {
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            {friendItems.map((item,index)=><Friend key={index} className="col-4 p-1" baseUrl={urlImageSrc} srcImage={item.src} alt={item.alt}/>)}
{/*urlImageSrc+item.src*/}
            {/*<Friend className="col-4 p-1" src={"styles/images/"+"friend1.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend2.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend3.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend4.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend5.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend6.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend7.jpg"} alt={"friend"}*/}
            {/*        id="left"/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend8.jpg"} alt={"friend"}/>*/}
            {/*<Friend className="col-4 p-1" src={"../../styles/images/friend9.jpg"}*/}
            {/*        alt={"friend"} id="right"/>*/}
        </section>
    );
};
//../../styles/images/
export {Friends};//default