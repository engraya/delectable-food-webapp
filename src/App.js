import NavBar from './layouts/NavBar';
import AppPages from './pages/AppPages';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popular from './components/Popular';
import Favourites from './components/Favourites';
import Recipes from './pages/Recipes';
import Cuisine from './pages/Cuisine';
import Vegetarian from './components/Vegetarian';
import SeachedRecipe from './pages/SeachedRecipe';
import RecipeDetails from './pages/RecipeDetails';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/cuisine' element={<Cuisine/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/vegetarian' element={<Vegetarian/>}/>
      <Route path='/searched/:search' element={<SeachedRecipe/>}/>
      <Route path='/recipe/:name' element={<RecipeDetails/>}/>
    </Routes>
    <AppPages/>  
    </div>
  );
}

export default App;
