import { lazy, Suspense } from "react";
import { Routes, Route,Navigate } from "react-router-dom";

const HomePage = lazy(() => import('./views/homePage'));
const MoviesPage = lazy(() => import('./views/moviesPage'));
const FilmOverview = lazy(() => import('./views/filmOverview'));
const Layout = lazy(() => import('./components/layout/Layout'));
const Cast = lazy(() => import('./components/cast'));
const Reviews = lazy(() => import('./components/reviews'));


function App() {
  return <>
    <Suspense fallback={<h3>Loading...</h3>}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="movies/:filmId/*" element={<FilmOverview />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<MoviesPage />}/>
        <Route path="*" element={<Navigate to='/' replace />} />
      </Route>
      </Routes>
      </Suspense>
  </>
}

export default App;
