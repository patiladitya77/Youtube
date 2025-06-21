import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVidoes(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <VideoCard key={item.id} info={item} />
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
