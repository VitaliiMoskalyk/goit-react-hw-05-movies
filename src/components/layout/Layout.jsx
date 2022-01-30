import { NavLink, Outlet } from "react-router-dom";
import { Head, Title, NavMenu } from "./layout.styled";
import { Button } from "../button/Button.styled";

export default function Layout() {
  let activeStyle = {
    color: "black",
  };

  return (
    <>
      <Head>
        <Title>
          <h1>Find your best film!</h1>
        </Title>
        <nav>
          <NavMenu>
            <Button style={{ marginRight: "10px" }}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/movies"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Movies
              </NavLink>
            </Button>
          </NavMenu>
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
