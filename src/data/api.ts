import {url} from '../utils/constants'

// export const getRandomCocktail = async () => {
//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//     };
//     const response = await fetch(BASE_URL + "/random.php", requestOptions);
//     const result = await response.json();
//     console.log(result);
//     return result;
// };

const getRandomFilmData: TFGetRandomFilmData = async () => {
    return fetch(`${url}films`)
        .then(response => response.json())
        .then(data => {
            let episode = Math.floor(Math.random() * data.length);

            return {
                filmTitle: data[episode].title,
                filmData: data[episode].opening_crawl
            };
        })
        .catch(e=>console.log(e));



    // let idFilm:number = Math.floor(Math.random()*5+1);
    // fetch(`https://sw-info-api.herokuapp.com/v1/films/${idFilm}`)
    //     .then(response => response.json())
    //     .then(data=>this.setState({title:data.opening_crawl}));
}


const getAllPlanets: TFGetAllPlanets = async () => {
    return fetch(`${url}planets`)
        .then(response => response.json())
        .then(data => {
            return data.map((planet: TPlanetsData) => {
                    return {
                        id: planet.id,
                        edited: planet.edited,
                        climate: planet.climate,
                        surface_water: planet.surface_water,
                        name: planet.name,
                        diameter: planet.diameter,
                        rotation_period: planet.rotation_period,
                        created: planet.created,
                        terrain: planet.terrain,
                        gravity: planet.gravity,
                        orbital_period: planet.orbital_period,
                        population: planet.population,
                    }
                }
            );
        })
}


const getAllNamePlanets: TFGetAllNamePlanets = async () => {
    return fetch(`${url}planets`)
        .then(response => response.json())
        .then(data => data.map((planet: TPlanetsData) => planet.name))
        //.catch(e=>console.log(e));
}

type TFGetAllPlanets = () => Promise<Array<TPlanetsData>>;
type TPlanetsData = {
    "id": number;
    "edited": string;
    "climate": TClimate;
    "surface_water": string;
    "name": string;
    "diameter": string;
    "rotation_period": string;
    "created": string;
    "terrain": string;
    "gravity": string;
    "orbital_period": string;
    "population": string;
}

// {
//     "id": 19,
//     "edited": "2014-12-20T20:58:18.450Z",
//     "climate": "hot",
//     "surface_water": "unknown",
//     "name": "Saleucami",
//     "diameter": "14920",
//     "rotation_period": "26",
//     "created": "2014-12-10T13:47:46.874Z",
//     "terrain": "caves, desert, mountains, volcanoes",
//     "gravity": "unknown",
//     "orbital_period": "392",
//     "population": "1400000000"
// },


const getPeopleById: TFGetPeople = async (id: number) => {
    return fetch(`${url}peoples/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return {
                "edited": data.edited,
                "name": data.name,
                "created": data.created,
                "gender": data.gender,
                "skin_color": data['skin_color'],
                "hair_color": data['hair_color'],
                "height": data.height,
                "eye_color": data['eye_color'],
                "mass": data.mass,
                "homeworld": data.homeworld,
                "birth_year": data['birth_year'],
                "image": data.image
            };
        }).catch(e=>console.log(e));
    // "edited": "2014-12-20T21:17:56.891Z",
    //     "name": "Luke Skywalker",
    //     "created": "2014-12-09T13:50:51.644Z",
    //     "gender": "male",
    //     "skin_color": "fair",
    //     "hair_color": "blond",
    //     "height": "172",
    //     "eye_color": "blue",
    //     "mass": "77",
    //     "homeworld": 1,
    //     "birth_year": "19BBY",
    //     "image": "luke_skywalker.jpg"
}

type TGender = "male" | "female";
type TSkinColor = string;
type THairColor = string;
type TEyeColor = string;
type TYear = string;
type TFGetPeople = (id: number) => Promise<TPeopleData|void>;
type TFGetRandomFilmData = () => Promise<TFilmeData|void>;
type TFGetAllNamePlanets =()=>Promise<Array<string>>;
type TClimate = string;

type TPeopleData = {
    "edited": string | null;
    "name": string | null;
    "created": string | null;
    "gender": TGender | null;
    "skin_color": TSkinColor | null;
    "hair_color": THairColor | null;
    "height": string | null;
    "eye_color": TEyeColor | null;
    "mass": string | null;
    "homeworld": number | null;
    "birth_year": TYear | null;
    "image": string | null;
}

type TFilmeData = {
    filmTitle: string;
    filmData: string;
}

export {getPeopleById, getRandomFilmData, getAllPlanets, getAllNamePlanets, type TPeopleData, type TPlanetsData, type TFGetAllNamePlanets};