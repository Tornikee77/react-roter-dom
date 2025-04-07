import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact Us</Link>
        <br />
        <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
};

export default Home;
