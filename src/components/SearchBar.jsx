import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Paper, IconButton } from "@mui/material";
// import { SearchIcon } from "@heroicons/react/24/solid";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchterm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchterm("");
    }
  };

  return (
    <form
      className="flex items-center p-3 bg-white rounded-full mr-5 w-1/3 "
      onSubmit={handleSubmit}
      // sx={{
      //   borderRadius: 20,
      //   border: "1px solid #e3e3e3",
      //   pl: 2,
      //   boxShadow: "none",
      //   mr: { sm: 5 },
      // }}
    >
      <input
        className="flex outline-none w-full"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <FaSearch color="#FC1503" width={25} />
      {/* <IconButton type="submit" sx={{p:'10px', color:'red'}} >
        <Search /> */}
      {/* </IconButton> */}
    </form>
  );
};

export default SearchBar;
