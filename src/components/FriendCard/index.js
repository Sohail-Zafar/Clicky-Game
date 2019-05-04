import React from "react";
import "./style.css";

// This function returns the images to be displayed to the screen randomly by calling the randomShuffle().
// This function also has an onClick() function to handle the image click event. 
function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <span onClick={() => props.randomShuffle(props.index)} className="shuffle">
      <img alt={props.id} src={props.image} height="125" width ="125" />
      </span>
        
      </div>
    </div>
      );
}

export default FriendCard;
