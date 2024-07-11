import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { useEffect, useState } from 'react';

const App = () => {
  const [starship, setStarship] = useState({});

  const fetchData = async (starship) => {
    const data = await starshipService.showStarships(starship);
    const newStarshipState = {
      name: data.id.name,
      model: data.id.model,
      length: data.id.length,
      crew: data.id.crew,
      films: data.id.films,
      pilots: data.id.pilots,
    };
    setStarship(newStarshipState);
  };

  console.log('State: ', starship);

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.showStarships('5');
      const newStarshipState = {
        name: data.id.name,
        model: data.id.model,
        length: data.id.length,
        crew: data.id.crew,
        films: data.id.films,
        pilots: data.id.pilots,
      };
      setStarship(newStarshipState);
    };

    fetchDefaultData();
  }, []);

  return (
    <main>
      <h1>SWAPI</h1>
      <StarshipSearch fetchData = {fetchData} />
      <StarshipList starship = {starship} />
    </main>
  );
}

export default App
