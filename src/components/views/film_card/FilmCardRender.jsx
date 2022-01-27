import { NavLink, useParams, useNavigate, Outlet } from "react-router-dom";
import api from "../../API_services/FetchAPI";
import { Wrapper, Button, Overviev } from "./filmCard.styled";

const APIkey = "497db919393f11a553a342853c0aad01";
export default function FilmCard() {
  const params = useParams();
  const movie = params.filmId;
  const APIadress = `https://api.themoviedb.org/3/movie/${movie}?api_key=${APIkey}`;
  const [filmInfo, isLoaded, error] = api.useFetchData(APIadress);
  const navigate = useNavigate();

  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <Wrapper>
          <Button type="button" onClick={() => navigate("/")}>
            home
          </Button>
          <h3>{filmInfo.original_title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${filmInfo.backdrop_path}`}
            alt=""
          />
          <Overviev>{filmInfo.overview}</Overviev>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Rewiews</NavLink>
          <Outlet />
        </Wrapper>
      )}
    </>
  );
}
