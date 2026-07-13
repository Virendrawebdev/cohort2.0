import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import CreateCat from '../pages/CreateCat/CreateCat'
import Cats from '../pages/Cats/Cats'
import CatDetails from '../pages/CatDetails/CatDetails'
import AskAI from '../pages/AskAI/AskAI'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-cat" element={<CreateCat/>} />
        <Route path="/cats" element={<Cats/>} />
        <Route path="/cat-details/:id" element={<CatDetails/>} />
        <Route path="/ask-ai" element={<AskAI/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes