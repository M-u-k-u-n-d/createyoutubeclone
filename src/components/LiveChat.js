import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(()=>{
    const interval = setInterval(()=>{
      // API Polling
      // console.log("API_POLLONG");
      dispatch(addMessage({
        name:generateRandomName(),
        message: generateRandomMessage(),
      }))
    }, 1500);

    return () => clearInterval(interval);
  },[])
  return (
    <div className="">
      {
        chatMessages.map((c,i)=>(
          <ChatMessage key={i} name = {c.name} message={c.message}/>
        ))
      }
    </div>
  );
};

export default LiveChat;
