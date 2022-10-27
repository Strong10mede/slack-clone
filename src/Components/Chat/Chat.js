import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlineIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            #{roomId} <StarBorderOutlineIcon />{" "}
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages"></div>
    </div>
  );
}

export default Chat;
