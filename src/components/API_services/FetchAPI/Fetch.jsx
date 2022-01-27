import { useEffect, useState } from "react";
import propTypes from "prop-types";

function useFetchData(APIurl) {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    fetch(`${APIurl}`)
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
  }, [APIurl]);

  return [data, isLoaded, error];
}
useFetchData.propTypes = { APIurl: propTypes.string.isRequired };

const api = { useFetchData };
export default api;
