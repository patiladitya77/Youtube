import React from "react";
import Button from "./Button";

const ButtonList = () => {
  let list = [
    "All",
    "Cricket",
    "Gaming",
    "JEE",
    "Comedy",
    "Entretainment",
    "Movies",
    "Coding",
    "Data",
    "Engineering",
    "Swimming",
    "Series",
  ];
  return (
    <div className="flex ">
      {list.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
