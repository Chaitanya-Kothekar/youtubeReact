import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div className=" w-[99vw] border black">
        <div className="flex ">
          <div className="">
            <iframe
              className="ml-20 mt-5 rounded-2xl  "
              width="800"
              height="450"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" w-full m-5 ">
            <LiveChat />
          </div>
        </div>

        <div>
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
