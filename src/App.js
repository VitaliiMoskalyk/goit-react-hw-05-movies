import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import TrendMovies from './components/views/home';
// import MoviesPage from './components/views/movies';
// import Nothing from './components/views/notFound/NothingHere';
// import FilmCard from './components/views/film_card'
// import Layout from "./components/layout/Layout";
// import Cast from './components/views/cast';
// import Reviews from './components/views/reviews';

const TrendMovies = lazy(() => import('./components/views/home'));
const MoviesPage = lazy(() => import('./components/views/movies'));
const Nothing = lazy(() => import('./components/views/notFound/NothingHere'));
const FilmCard = lazy(() => import('./components/views/film_card'));
const Layout = lazy(() => import('./components/layout/Layout'));
const Cast = lazy(() => import('./components/views/cast'));
const Reviews = lazy(() => import('./components/views/reviews'));

const APIkey = "497db919393f11a553a342853c0aad01";
const APIadress = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIkey}`;

function App() {

  return <>
    <Suspense fallback={<h3>Loading...</h3>}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<TrendMovies url={APIadress} />} />
        <Route path="movies/:filmId/*" element={<FilmCard />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews />} />
            
        </Route>
        <Route path="movies" element={<MoviesPage />}/>
        <Route path="*" element={<Nothing />} />
      </Route>
      </Routes>
      </Suspense>
  </>
}

export default App;
