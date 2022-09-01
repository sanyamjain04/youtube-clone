import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Paper, IconButton } from "@mui/material";
// import { SearchIcon } from "@heroicons/react/24/solid";
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
  return (
    <div className="flex items-center p-3 bg-white rounded-full mr-5 w-1/3 "
      component="form"
      onSubmit={() => {}}
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
        // value=""
        onChange={() => {}}
      />
      <FaSearch color="#FC1503" width={25} />
      {/* <IconButton type="submit" sx={{p:'10px', color:'red'}} >
        <Search /> */}
      {/* </IconButton> */}
    </div>
  );
};

export default SearchBar;
