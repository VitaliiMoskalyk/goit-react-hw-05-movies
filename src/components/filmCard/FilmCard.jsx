import { NavLink, Outlet } from "react-router-dom";
import { Overviev } from "../../views/filmOverview/filmCard.styled";
import { Wrapper, FilmInfo, FilmItems } from "./filmCard.styled";

export default function FilmCard({
  title,
  src,
  overview,
  genres,
  popularity,
  vote,
}) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${src}`}
        alt={title}
        width={500}
      />
      <FilmInfo>
        {genres &&
          genres.map((genre) => (
            <FilmItems key={genre.id}>{genre.name}</FilmItems>
          ))}

        <FilmItems>{popularity}</FilmItems>

        <FilmItems>{vote}</FilmItems>
      </FilmInfo>
      <Overviev>{overview}</Overviev>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Rewiews</NavLink>
      <Outlet />
    </Wrapper>
  );
}
