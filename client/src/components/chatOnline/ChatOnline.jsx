import "./chatOnline.css";

const ChatOnline = () => {
  return <div className="chatOnline">
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Carter</span>
        </div>
  </div>;
}   
export default ChatOnline;