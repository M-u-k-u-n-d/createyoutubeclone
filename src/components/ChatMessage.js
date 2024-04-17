import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatMessage = ({name,message}) => {
    // console.log(name)
    return ( <div className="flex items-center gap-2">
        <FontAwesomeIcon icon = {faCircleUser}/> 
        <span className="font-semibold font-sans">{name}</span>
        <span className="font-[karla]">{message}</span>
    </div> );
}
 
export default ChatMessage;