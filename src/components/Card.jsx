// Tiene un input checkbox para guardarse en favorites. Añadir en css de Card.Module.css
import { Link } from 'react-router-dom'
import styles from '../components/Card.module.css'

function Card({ coin }) {
  return (
    <Link to={`coin/${coin.id}`}>
      <div className={styles.card}>
        <h3>{coin.name}</h3>
        <p>{coin.symbol}</p>
        <p>{Number(coin.priceUsd).toFixed(4)} USD</p>
      </div>
    </Link>
  )
}

export default Card