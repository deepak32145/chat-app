import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ChatOnline = ({onlineUsers, currentId , setCurrentChat}) => {
    const [userDetails, setUserDetails] = useState({});
    
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const details = {};
                for (let user of onlineUsers) {
                    const res = await axios.get("/users?userId=" + user.userId);
                    details[user.userId] = res.data;
                }
                setUserDetails(details);
            } catch (err) {
                console.log(err);
            }
        };
        if (onlineUsers.length > 0) {
            fetchUserDetails();
        }
    }, [onlineUsers]);

    console.log('online users' , onlineUsers)
  return <div className="chatOnline">
    {onlineUsers.map((data , index) =>(
        <div key ={index} className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">{userDetails[data.userId]?.username}</span>
        </div>
    ))}

  </div>;
}   
export default ChatOnline;