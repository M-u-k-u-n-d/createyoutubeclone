import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { addMessage } from "../utils/chatSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [liveMessage,setLiveMessage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full bg-pink-400">
      <div className="mt-5 flex">
        <div className="">
          <iframe
            width="760"
            height="415"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col w-full ml-10 mr-10">
          <div className="flex justify-between w-full bg-gray-300 rounded-t-lg p-4">
            <select className="border-none cursor-pointer rounded-xl font-semibold font-mono p-1">
              <option value="top">Top chat</option>
              <option value="live">Live chat</option>
            </select>

            <div>
              <FontAwesomeIcon icon={faMultiply} />
            </div>
          </div>
          <div
            className="h-[70vh] bg-gray-300 border border-solid border-gray-600
      overflow-y-scroll p-2 flex flex-col-reverse"
          >
            <LiveChat />
          </div>
          <form className=" p-4 rounded-b-lg bg-black flex items-center justify-center" onSubmit={
            (e)=>{
              e.preventDefault();
              // console.log("On form submit", liveMessage);
              dispatch(addMessage({
                name:"Mukund Tiwari",
                message: liveMessage,
              }));
              setLiveMessage("");
            }
          }>
            <input
              className="w-[25vw] bg-gray-200 rounded-l-2xl h-10 pl-4 placeholder-black font-mono"
              type="text"
              value={liveMessage}
              placeholder="Chat"
              onChange={(e)=>{
                setLiveMessage(e.target.value);
              }}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-2xl">
              Send
            </button>
          </form>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
