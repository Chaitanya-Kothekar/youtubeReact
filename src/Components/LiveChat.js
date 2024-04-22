import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, respond } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    // Api polling
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: respond(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="border  rounded-xl p-5 shadow shadow-black bg-gray-200">
        <div className=" h-[350px] overflow-y-scroll  flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
        <form
          className="flex m-2 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Chaitanya Kothekar",
                message: liveMessage,
              })
            );
            setLiveMessage(""); //after sending comment it will clear input box
          }}
        >
          <input
            className="h-6vh p-5 rounded-lg bg-white border w-full sticky"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="p-1 border h-12 rounded-md ml-4 bg-black w-40 text-white  hover:text-lg hover:font-bold ">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
