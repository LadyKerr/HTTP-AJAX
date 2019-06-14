import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Welcome to Friends List!</h1>
      <NavLink to="/friends-list">View Friends</NavLink>
    </div>
  );
}

export default Home;