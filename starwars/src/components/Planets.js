import React, { useState } from 'react';
import { useQuery, useQueryClient, usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  console.log(page);
  return res.json();
}

const Planets = () => {
  const [ page, setPage ] = useState(1);
  const queryClient = useQueryClient();
  const {data, status} = useQuery(['planets', page], () => fetchPlanets('planets', page));

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default Planets;