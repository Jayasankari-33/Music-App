import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Songs from './Components/Songs'
import Sidebar from './Components/Sidebar'
import Favorities from './Components/Favorities'
import Playlist from './Components/Playlist';
import Search from './Components/Search'; // Import Search component
import Uhome from './Components/Uhome'; // Import Uhome component


function App() {

  return (
    <div  >
      <BrowserRouter>
        <div>
          <Sidebar />
        </div>

        <div>
          <Routes>
            <Route path='/' element={<Uhome />} /> {/* Set Uhome as default path */}
            <Route path='/songs' element={<Songs />} />
            <Route path='/favorites' element={<Favorities />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/search' element={<Search />} /> {/* Add Route for Search component if you decide to use it as a separate page */}
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App