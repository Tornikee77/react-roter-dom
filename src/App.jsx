import React from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  const element = useRoutes(routes);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact Us</Link>
        <br />
        <Link to="/about">About Us</Link>
      </nav>

      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
