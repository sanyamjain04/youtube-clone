import React from "react";
import { useState, useEffect } from "react";
// import { Box, Typography, Stack } from "@mui/material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="flex-row sm:flex  h-[70%]">
      <div className=" overflow-scroll sm:h-[89vh] ml-2 flex-1">
        <p className="ml-5 text-lg" style={{ color: "white" }}>
          Search Results for <span style={{ color: "#f31503" }}>{searchTerm}</span>
        </p>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
