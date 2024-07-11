import { useState } from "react";

const StarshipSearch = (props) => {
    const [starship, setStarship] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData(starship);
        setStarship('');
    };

    return (
        <secion>
            <h2>Search Starships!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="starship">Enter a starship name:</label>
                <input
                    is = 'starship'
                    type = 'text'
                    value = {starship}
                    onChange = {(e) => setStarship(e.target.value)}
                />
                <button type = "submit">Search!</button>
            </form>
        </secion>
    );
};

export default StarshipSearch;