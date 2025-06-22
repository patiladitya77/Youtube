import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { title, channelTitle, thumbnails } = info.snippet;
  return (
    <div className="p-2 px-4 m-2 mx-4 w-72 shadow-lg">
      <div>
        <img className="rounded-lg " src={thumbnails?.maxres?.url} />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
