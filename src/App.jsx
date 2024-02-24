import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Shoppage from './pages/Shoppage/Shoppage'


function App() {


  return (
    <div>
    <Router>
 <Navbar sticky="top"/>
 <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/shop' element={<Shoppage/>}/>
 </Routes>
    </Router>
    </div>


  )
}

export default App
