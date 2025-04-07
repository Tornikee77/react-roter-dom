import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/contact">Contact Us</Link>
          <br />
          <Link to="/about">About Us</Link>
        </nav>
      </header>
      <Outlet />

      <footer>Copyright</footer>
    </div>
  );
};

export default Layout;
