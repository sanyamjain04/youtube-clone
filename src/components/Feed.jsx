import React from "react";
import { useState, useEffect } from "react";
// import { Box, Typography, Stack } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="flex-row sm:flex  h-[70%]">
      {/*  Feed SideBar Part */}

      <div className=" h-auto sm:h-[90.3vh] border-r-2 border-[#3d3d3d] sm:px-0 md:px-2 overflow-auto">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <p className="copyright mt-1">Copyright 2022 SJ Media</p>
      </div>

      {/* Feed Videos Part */}

      <div className=" overflow-scroll sm:h-[89vh] ml-2 flex-1">
        <p  className="ml-5 text-lg" style={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </p>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
