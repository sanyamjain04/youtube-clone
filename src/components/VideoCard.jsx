import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  demoChannelUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <div className=" flex flex-col bg-red-500 w-[280px] h-[250px]">
    {/* Video Thumbnail */}

    <div className="">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          className=" w-[280px] h-[150px]"
          src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
      </Link>
    </div>

    {/* Video title  */}

     <div
     className="bg-[#1e1e1e] h-[106px] flex-col p-2"
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <p className="text-white text-base mb-2">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        {/* Video Channel name */}

        <p className="text-gray-300 text-xs flex items-center">
          {snippet?.channelTitle || demoChannelTitle}
          <AiOutlineCheckCircle className="text-[12px] ml-1" />
        </p>
      </Link>
    </div> 
  </div>
);

export default VideoCard;
