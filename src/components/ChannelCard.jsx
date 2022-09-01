import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className='rounded-full items-center justify-center w-80 h-80 m-auto '
      // sx={{
      //   boxShadow: "none",
      //   borderRadius: "20px",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   width: { xs: "356px", md: "320px" },
      //   height: "326px",
      //   margin: "auto",
      // }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col justify-center text-center text-white ">
          <div>
            <img
              className=" w-44 h-44 rounded-full border border-[#e3e3e3]"
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
            />
          </div>

          {/* Channel name  */}

          <p variant="h6">
            {channelDetail?.snippet?.title}
            <AiOutlineCheckCircle className="text-[15px] ml-1" />
          </p>

          {/* Channel Subscriber count */}

          {channelDetail?.statistics?.subscriberCount && (
            <p className="text-[15px] font-medium bg-gray-600">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}
              Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
