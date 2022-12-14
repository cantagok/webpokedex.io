import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import PokemonPage from './pages/PokemonPage.jsx'
import { AppProvider } from './AppContext.jsx'

/**  
 * Implement A search Function 
 * Change theme color to red as primary
 * Finish pokemon page
 * optimize code
 * remove unncessary code
 * remove theme item and style remaining components using styled
 * Create Transition when home and pokemon page enters
*/
function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <AppProvider>
        <Routes>
          <Route path='/webpokedex.io' element={<Navigate to='/Home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/pokemon/:id/:name' element={<PokemonPage/>}/>
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
