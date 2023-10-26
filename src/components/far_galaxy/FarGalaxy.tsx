import React from 'react';

interface PropsFarGalaxy {
    title: string;
}

interface StateFarGalaxy {
    title: string;
}

class FarGalaxy extends React.Component<PropsFarGalaxy, StateFarGalaxy> {

    constructor(props: PropsFarGalaxy) {
        super(props);
        this.state = {title:props.title};
    }

    componentDidMount() {
        let idFilm:number = Math.floor(Math.random()*5+1);
        fetch(`https://sw-info-api.herokuapp.com/v1/films/${idFilm}`)
            .then(response => response.json())
            .then(data=>this.setState({title:data.opening_crawl}));
        
            // .then(data => this.setState({isLoading: false, hero: data}))
    }

    render(): React.ReactNode {
        return (
            <p className="farGalaxy">{this.state.title}</p>
        );
    }
}

// const FarGalaxy:React.FC<PropsFarGalaxy> = ({title}) =>
// {
//
// };

export {FarGalaxy};