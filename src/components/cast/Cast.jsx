import { useParams, useNavigate } from "react-router-dom";
import api from "../../fetchAPI";
import { List } from "./cast.styled.js";
import FilmList from "../filmList";
import NoInfo from "../images/NoInfo.png";

export default function Cast() {
  const params = useParams();
  const movie = params.filmId;
  const navigate = useNavigate();
  const [filmInfo, isLoaded, error] = api.useFetchData("casting", movie);
  console.log(filmInfo);
  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <List>
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
          {filmInfo.cast.length === 0 ? (
            <img src={NoInfo} alt="no info" />
          ) : (
            filmInfo.cast.map(({ profile_path, name, id }) => (
              <li key={id}>
                <FilmList src={profile_path} title={name} />
              </li>
            ))
          )}
        </List>
      )}
    </>
  );
}
