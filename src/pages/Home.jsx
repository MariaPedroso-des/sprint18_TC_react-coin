// Listado de las criptomonedas - fetch, useEffect
// Se hace click en la Card de coin, redirige a la subruta dinámica de cada coin específica
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar.jsx"
import Card from "../components/Card.jsx"
import App from "../App.jsx"

function Home() {
  const [coins, setCoins] = useState([]) //array
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch((`https://rest.coincap.io/v3/assets`), {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        })
        if(!response.ok) {
          setCoins([])
          setError('Error al cargar las criptomonedas')
          return
        }
  
        const data = await response.json()
        setCoins(data.data)

      } catch (error) {
        console.log(error)
        setError('Error al cargar las criptomonedas')
      } finally {
        setLoading(false)
      }
    }
    fetchApi()
  }, [])

  if (loading) return <p>Cargando datos...</p>
  if (error) return <p>{error}</p>
  return (
    <>
      <h2>Criptomonedas</h2>
      <div>
        {coins.map(c => (
          <Card key={c.id} coin={c} />
        ))}
      </div>
    </>
  )
}

export default Home