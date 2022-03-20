import { useQuery } from "react-query"
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:3000/superheroes`)
}
export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('Perform side effect after data fetch');
  }

  const onError = () => {
    console.log('Perform side effect after encountering error');
  }

  const { isLoading, data, isError, error, isFetching, refetch } =  useQuery('super-heroes', fetchSuperHeroes,
  {
    enabled: false,
    onSuccess,
    onError
  })

  console.log(isLoading, isFetching);
  if(isError) {
    return <h2>{error.message}</h2>
  }
  if(isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Refresh</button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}
