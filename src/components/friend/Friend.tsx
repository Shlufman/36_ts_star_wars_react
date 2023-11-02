import React from 'react';

interface PropsFriend{
    srcImage:string;
    alt:string;
}

const Friend :React.FC<PropsFriend> = ({srcImage,alt}) =>
{
    return (
        <img className="col-4 p-1" src={require(`../../styles/images/${srcImage}`)} alt={alt}/>
    );
};

export {Friend};