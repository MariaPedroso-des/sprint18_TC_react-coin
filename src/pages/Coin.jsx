// Esto me tiene que devolver cada coin individual. Tiene que hacer fetch, useState, useEffect como Home pero del seleccionado
import { useState, useEffect } from 'react'
// Tengo que utilizar parámetros propios del array como el id de la URL
import { useParams } from 'react-router-dom'

function Coin() {
  const { id } = useParams()
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(`https://rest.coincap.io/v3/assets/${id}`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        })
        if(!response.ok) {
          setError('Información no encontrada')
        }

        const data = await response.json()
        setCoin(data.data)

      } catch (err) {
        setError('No se ha podido cargar la información')
      } finally {
        setLoading(false)
      }
    }
    fetchCoin()
  }, [id])

  if (loading) return <p>Cargando datos...</p>
  if (error) return <p>{error}</p>
  if (!coin) return null

  return (
    <>
      <h2>{coin.name}</h2>
      <p>{coin.symbol}</p>
      <p>Precio: {Number(coin.priceUsd).toFixed(4)} USD</p>
      <p>Rank: {coin.rank}</p>
      <p>Market cap: {Number(coin.marketCapUsd).toLocaleString()} USD</p>
      <p>Change percent 24h: {coin.changePercent24Hr}</p>
      <input type='checkbox' />
    </>
  )
}

export default Coin