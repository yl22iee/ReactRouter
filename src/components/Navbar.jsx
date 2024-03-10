import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <h2>
      <Link to="/">Home</Link>
      <Link to="/video">Video</Link>
    </h2>
  );
}
