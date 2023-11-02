import React from 'react';
import {getRandomFilmData} from '../../data/api';

interface PropsFarGalaxy {

}

interface StateFarGalaxy {
    isLoading: boolean;
    filmTitle?: string;
    filmData?: string;
}

class FarGalaxy extends React.Component<PropsFarGalaxy, StateFarGalaxy> {

    constructor(props: PropsFarGalaxy) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        getRandomFilmData().then(data =>
            this.setState(
                {
                    isLoading: false,
                    filmTitle: data?.filmTitle,
                    filmData: data?.filmData
                }
            ));
    }

    render(): React.ReactNode {
        if (this.state.isLoading)
            return <p className="far-galaxy">'Loading...'</p>
        else
            return (
                <>
                    <p className="farGalaxy">{this.state.filmTitle}</p>
                    <p>{this.state.filmData}</p>
                </>
            );
    }
}

export {FarGalaxy};