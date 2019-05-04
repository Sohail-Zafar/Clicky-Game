import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <span onClick={() => props.randomShuffle(props.id)} className="shuffle">
      <img alt={props.id} src={props.image} height="125" width ="125" />
      </span>
        
      </div>
    </div>
      );
}

export default FriendCard;
