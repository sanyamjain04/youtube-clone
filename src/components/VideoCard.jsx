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
  <div className="w-full sm:w-[320px]">
    {/* Video Thumbnail */}

    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <img
        className=" w-[358px] object-contain"
        src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
      />
    </Link>

    {/* Video title  */}

    <div className="bg-[#1e1e1e] h-[106] flex-col">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <p className="text-white font-bold">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        {/* Video Channel name */}

        <p className="text-gray-300 flex items-center">
          {snippet?.channelTitle || demoChannelTitle}
          <AiOutlineCheckCircle className="text-[12px] ml-1" />
        </p>
      </Link>
    </div>
  </div>
);

export default VideoCard;
