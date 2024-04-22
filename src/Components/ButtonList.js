import React from "react";
import Button from "./Button";

const ButtonsNameList = [
  "All",
  "song",
  "game",
  "movie",
  "News",
  "Sports",
  "Live",
  "Fashion",
  "Tech",
  "Food",
  "Travel",
  "DIY",
  "Education",
  "Comedy",
];

const ButtonList = () => {
  return (
    <>
      <div className="flex">
        {ButtonsNameList.map((buttonName, i) => (
          <div key={i} className="float-left">
            <Button key={i} name={buttonName} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonList;
