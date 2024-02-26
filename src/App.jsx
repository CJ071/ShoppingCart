import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Shoppage from './pages/Shoppage/Shoppage'
import { ShopProvider } from './context/ShopContext/ShopContext'


function App() {
  
  return (
    <ShopProvider>
    <div>
    <Router>
 <Navbar sticky="top"/>
 <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/shop' element={<Shoppage/>}/>
 </Routes>
    </Router>
    </div>
   </ShopProvider>
  )
}

export default App
