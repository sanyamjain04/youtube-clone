import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="h-[89vh] overflow-auto">
      <div
        className="h-48 z-50"
        style={{
          background:
            "radial-gradient(circle, rgba(6,54,135,0.9139005944174545) 0%, rgba(2,0,36,1) 100%, rgba(0,95,255,0.9139005944174545) 100%)",
        }}
      ></div>
      <div className="w-full flex flex-col justify-center ">
        <div className="mt-[-93px] self-center ">
          <ChannelCard channelDetail={channelDetail} marginTop={"-93px"} />
        </div>
        <div>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
