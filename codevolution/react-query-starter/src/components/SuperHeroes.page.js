import { useState, useEffect } from 'react'
import axios from 'axios'
import { isError } from 'react-query'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch(error => {
      setError(error.message)
      setIsLoading(false)
    }) 
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}