import { NavLink, Outlet } from "react-router-dom";
import { Overviev } from "../../views/filmOverview/filmCard.styled";

export default function FilmCard({
  title,
  src,
  overview,
  genres,
  popularity,
  vote,
}) {
  return (
    <>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${src}`} alt={title} />
      <div>
        <ul>
          {genres &&
            genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>

        <p>{popularity}</p>

        <p>{vote}</p>
      </div>
      <Overviev>{overview}</Overviev>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Rewiews</NavLink>
      <Outlet />
    </>
  );
}
