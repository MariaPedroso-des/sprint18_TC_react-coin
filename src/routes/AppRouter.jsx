import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home'
import Coin from '../pages/Coin'
import Favorites from '../pages/Favorites'


//Root es el padre así que las demás tienen que ir dentro
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path="coin/:id" element={<Coin />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter