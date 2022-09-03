import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div className="flex items-center justify-center w-[280px] h-[250px]">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col justify-center text-white ">
          <div>
            <img
              className="w-40 h-40 rounded-full border border-[#e3e3e3]"
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
            />
          </div>

          {/* Channel name  */}

          <p className="flex mt-2 justify-center items-center">
            {channelDetail?.snippet?.title}
            <AiOutlineCheckCircle className="text-[15px] ml-1" />
          </p>

          {/* Channel Subscriber count */}

          {channelDetail?.statistics?.subscriberCount && (
            <p className=" m-auto text-[15px] font-medium ">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
