
import ResponsiveAppBar from './Components/AppBar/AppBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeComp from './Pages/Home'
import ProfileComp from './Pages/Profile'
function App() {


  return (
    <div className="App">
      <ResponsiveAppBar />


      <div style={{ border: "1px solid red", width: "500px", height: "70vh", margin: "auto" }}>
        <Routes>
          <Route path='' element={<HomeComp />} />
          <Route path='/profile' element={<ProfileComp />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
