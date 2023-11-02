import React, {Component} from 'react';
import {getAllNamePlanets} from "../../data/api";
import {period} from "../../utils/constants";
import './Contact.module.css';

interface Props {

}

interface State {
    isLoading: boolean;
    names?: Array<string>;
    selectedPlanet?: string;
}

class Contact extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        const localItem = localStorage.getItem('planets');
        let planets;
        if (localItem)
            planets = JSON.parse(localItem);

        if (!planets || (Date.now() - planets.timestamp) > period) {
            console.log(Date.now() - planets.timestamp);
            getAllNamePlanets()
                .then(names => this.setNamePlanets(names));
        } else {
            this.setState({
                isLoading: false,
                names: planets.info,
            });
        }
    }

    setNamePlanets(names:Array<string>){
        this.setState(
            {
                isLoading: false,
                names: names,
            }
        );
        localStorage.setItem('planets', JSON.stringify({info: names, timestamp: Date.now()}));
    }

    selectPlanet = (planet: string): void => {
        this.setState({selectedPlanet: planet});
    }

    handleOnSubmitForm: React.FormEventHandler =(e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmitForm}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet">{this.state.names&&this.state.names.map((item, index) =>
                        <option value={item} key={index}>{item}</option>)}
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export {Contact};