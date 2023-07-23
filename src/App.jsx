import { Route, Routes } from 'react-router-dom'
import { HomePage, Error, MealDetails, Category } from './pages/index'
import NavBar from './components/Header/NavBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MealLists from './pages/MealLists'

function App() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/meallist' element={<MealLists />} />
        <Route path='/meal/:id' element={<MealDetails />} />
        <Route path='/meal/category/:name' element={<Category />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
