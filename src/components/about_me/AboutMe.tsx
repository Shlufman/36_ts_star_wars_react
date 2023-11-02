import React, {Component} from 'react';
import {getPeopleById, TPeopleData} from "../../data/api";


import {period} from "../../utils/constants";

interface Props {

}

interface State {

}

class AboutMe extends Component<Props, TPeopleData> {

    constructor(props: any) {
        super(props);
        this.state =
            {
                "edited": null,
                "name": null,
                "created": null,
                "gender": null,
                "skin_color": null,
                "hair_color": null,
                "height": null,
                "eye_color": null,
                "mass": null,
                "homeworld": null,
                "birth_year": null,
                "image": null,
            }
    }

    componentDidMount() {
        const localItem = localStorage.getItem('hero');
        let hero;
        if (localItem)
            hero = JSON.parse(localItem);

        if (!hero || (Date.now() - hero.timestamp) > period) {
            getPeopleById(1).then(data => {
                    if (data) {
                        this.setState(data);
                        localStorage.setItem('hero', JSON.stringify(data));
                    }
                }
            )
        } else {
            this.setState(hero);//.info
        }
    }
    render():React.ReactNode {
        return (
            <div>
                <div>   {this.state.edited}</div>
                <div>   {this.state.name}</div>
                <div>   {this.state.created}</div>
                <div>   {this.state.gender}</div>
                <div>   {this.state.skin_color}</div>
                <div>   {this.state.hair_color}</div>
                <div>   {this.state.height}</div>
                <div>   {this.state.eye_color}</div>
                <div>   {this.state.mass}</div>
                <div>   {this.state.homeworld}</div>
                <div>   {this.state.birth_year}</div>
                <div>   {this.state.image}</div>
            </div>
        );
    }
}

export {AboutMe};