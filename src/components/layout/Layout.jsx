import { NavLink, Outlet } from "react-router-dom";
import { Head, Title, Footer } from "./layout.styled";

export default function Layout() {
  let activeStyle = {
    color: "red",
  };

  return (
    <>
      <Head>
        <Title>
          <h1>Find your best film!</h1>
        </Title>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
      </Head>
      <Outlet />
      {/* <Footer>
        <h3>We hope that you found the best film!</h3>
      </Footer> */}
    </>
  );
}
