import React from 'react';
import {pathToFileURL} from "url";

interface PropsFriend{
    baseUrl:string;
    srcImage:string;
    alt:string;
}

const Friend :React.FC<PropsFriend> = ({baseUrl, srcImage,alt}) =>
{
    return (
        <img className="col-4 p-1" src={require(`../../styles/images/${srcImage}`)} alt={alt}/>
    );
};

export {Friend};//default