import "./App.css";
import Header from "./components/header/header";
import Movie from './components/movies/movies';
import { Route, Routes } from "react-router-dom";
import Details from "./components/moviedetails/movieDetails";

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/moviedetails/:id' element={<Details />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
