import React from "react";
import "./Message.css";
function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {/* The toLocaleString() method returns a string with a
            language-sensitive representation of this date */}
            {/* toDate() Extension to the native string variable to convert a string into a
            date. */}
            {new Date(timestamp?.toDate()).toLocaleTimeString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
