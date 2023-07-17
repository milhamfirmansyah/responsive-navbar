import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'
import { Erigo } from './pages/Erigo'
import { Collaboration } from './pages/Collaboration'
import { ErigoTour } from './pages/ErigoTour'
import { TrackOrder } from './pages/TrackOrder'
import { NoPage } from './pages/NoPage'
import axios from 'axios'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Erigo/>}/>
            <Route path="collaboration" element={<Collaboration/>}/>
            <Route path="tour" element={<ErigoTour/>}/>
            <Route path="order" element={<TrackOrder/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
