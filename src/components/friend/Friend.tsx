import React from 'react';
import {pathToFileURL} from "url";

interface Props{
    baseUrl:string;
    srcImage:string;
    alt:string;
}

const Friend :React.FC<Props> = ({baseUrl, srcImage,alt}) =>
{
    let s = 'friend2.jpg';
    return (
        <img className="col-4 p-1" src={require(`../../styles/images/${srcImage}`)} alt={alt}/>
    );
};
//'../../styles/images/friend2.jpg'
export {Friend};//default