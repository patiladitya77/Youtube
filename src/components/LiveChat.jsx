import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMesssage } from "../utils/chatSlice";
import { generaterandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMesage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessges = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      dispatch(
        addMesssage({
          name: generateRandomName(),
          message: generaterandomMessage(20),
        })
      );
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 ml-2 border border-black w-full h-[500px] bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessges.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="p-2 ml-2 w-full border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitetd" + liveMesage);
          dispatch(
            addMesssage({
              name: "Aditya",
              message: liveMesage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96"
          value={liveMesage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
        />
        <button className="mx-2 px-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
