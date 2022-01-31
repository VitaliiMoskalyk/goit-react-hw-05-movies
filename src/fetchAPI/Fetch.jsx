import { useEffect, useState } from "react";

function useFetchData(type, movie, query) {
  let APIurl;
  switch (type) {
    case "trending":
      APIurl = "trending/all/day?api_key=497db919393f11a553a342853c0aad01";
      break;
    case "casting":
      APIurl = `movie/${movie}/credits?api_key=497db919393f11a553a342853c0aad01&language=en-US`;
      break;
    case "review":
      APIurl = `movie/${movie}/reviews?api_key=497db919393f11a553a342853c0aad01&language=en-US&page=1`;
      break;
    case "card":
      APIurl = `movie/${movie}?api_key=497db919393f11a553a342853c0aad01`;
      break;
    case "search":
      APIurl = `search/movie?api_key=497db919393f11a553a342853c0aad01&language=en-US&page=1&include_adult=false&query=${query}`;
      break;

    default:
      break;
  }

  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") return;
    setIsLoaded(true);
    fetch(`https://api.themoviedb.org/3/${APIurl}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(false);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [APIurl, query]);

  return [data, isLoaded, error];
}

const api = { useFetchData };
export default api;
