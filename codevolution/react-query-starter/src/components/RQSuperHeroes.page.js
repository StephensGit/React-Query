import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('Perform side effect after data fetch');
  }
  const onError = () => {
    console.log('Perform side effect after encountering error');
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

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
        return <div key={hero.id}><Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>
      })}
      {/* {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  )
}
