const BASE_URL = `https://swapi.dev/api/starships/`

const showStarships = async (id) => {
    try {
        const queryString = `${id}/`
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error: ', error);
    }
}

export { showStarships };