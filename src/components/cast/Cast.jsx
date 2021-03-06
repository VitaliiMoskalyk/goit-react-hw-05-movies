import { useParams } from "react-router-dom";
import api from "../../fetchAPI";
import { List } from "./cast.styled.js";
import FilmItem from "../filmItem";
import NoInfo from "../images/NoInfo.png";

export default function Cast() {
  const params = useParams();
  const movie = params.filmId;

  const [filmInfo, isLoaded, error] = api.useFetchData("casting", movie);

  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <List>
          {filmInfo.cast.length === 0 ? (
            <img src={NoInfo} alt="no info" />
          ) : (
            filmInfo.cast.map(({ profile_path, name, id }) => (
              <li key={id}>
                <FilmItem src={profile_path} title={name} />
              </li>
            ))
          )}
        </List>
      )}
    </>
  );
}
