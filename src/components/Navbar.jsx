import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex h-20 justify-between items-center sticky t-0 z-10 ">
      <div>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img className="p-5" src={logo} alt="logo" width={85} />
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
