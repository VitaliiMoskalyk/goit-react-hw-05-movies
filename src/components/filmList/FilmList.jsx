import DefaultImage from "../images/No-Image.png";

export default function FilmList({ src, title }) {
  return (
    <>
      <img
        src={src ? `https://image.tmdb.org/t/p/w500/${src}` : DefaultImage}
        alt={title ? title : "no-description"}
        width={110}
      />
      <p>{title ? title : "No title"}</p>
    </>
  );
}
