import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
    return (
        <section>
            <h2>Starship info!</h2>
            <p>Name: {props.starship.name}</p>
            <p>Model: {props.starship.model}</p>
            <p>Length: {props.starship.length}</p>
            <p>Crew: {props.starship.crew}</p>
            <p>Films: {props.starship.films}</p>
            <p>Pilots: {props.starship.pilots}</p>
        </section>
    );
};

export default StarshipList;