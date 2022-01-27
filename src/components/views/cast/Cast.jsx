import { useParams } from "react-router-dom";
import api from "../../API_services/FetchAPI";
import { List } from "./cast.styled.js";

const APIkey = "497db919393f11a553a342853c0aad01";
export default function Cast() {
  const params = useParams();
  const movie = params.filmId;
  const APIadress = `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${APIkey}&language=en-US`;
  const [filmInfo, isLoaded, error] = api.useFetchData(APIadress);

  return (
    <>
      {error && <p>Error- {error.message}</p>}

      {isLoaded && <p>Loading...</p>}

      {filmInfo && (
        <List>
          {filmInfo.cast.map(({ profile_path, name, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={`${name}`}
                width={110}
              />
              <p>{name}</p>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
