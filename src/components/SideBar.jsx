import React from "react";

const SideBar = () => {
  return (
    <div className="w-48 shadow-md p-5">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default SideBar;
