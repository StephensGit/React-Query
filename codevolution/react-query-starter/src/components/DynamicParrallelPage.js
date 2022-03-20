import { useQueries } from "react-query"
import axios from 'axios'

const fetchSuperHeroes = (heroId) => {
    return axios.get(`http://localhost:3000/superheroes/${heroId}`)
}

export const DynamicParrallelPage = ({ heroIds }) => {
    const queryResults = useQueries(
        heroIds.map((id) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeroes(id),
            } 
        })
    )
    console.log({ queryResults });
  return (
    <div>DynamicParrallelPage</div>
  )
}
