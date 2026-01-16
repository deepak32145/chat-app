import "./message.css";
import {format} from "timeago.js";

const Message = ({own , message}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
};
export default Message;
