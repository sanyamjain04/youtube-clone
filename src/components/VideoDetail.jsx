import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="h-[90vh] overflow-auto mx-[2vw]">
      <div>
        <div className="flex flex-col lg:flex-row justify-center  ">
          <div className="self-center flex-1  lg:self-start m-5">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className=" react-player aspect-video "
              controls
            />
            <h5 className="text-white font-semibold">{title}</h5>
            <div className="flex gap-4 text-white opacity-70">
              <p>{parseInt(viewCount).toLocaleString()} views</p>
              <p>{parseInt(likeCount).toLocaleString()} likes</p>
            </div>
            <Link to={`/channel/${channelId}`}>
              <h6 className="text-gray-400 flex items-center gap-2">
                {channelTitle}
                <AiOutlineCheckCircle />
              </h6>
            </Link>
          </div>
            <div className="p-2 justify-center items-center h-[90vh] overflow-scroll lg:max-w-[400px]">
              <Videos videos={videos} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
