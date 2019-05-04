// Assignment: Clicky Game
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

var score = 0;
var highScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
  
    randomShuffle = id => {
    var newFriends = this.state.friends;
    if (this.state.friends[id].hasBeenPicked === true){
      alert("Game Over");
      if ( score > highScore ) {
        highScore = score;
        alert("You have the new high score.");
      }
      score = 0;
      for( var i = 0; i < 12; i++){
        newFriends[i].hasBeenPicked = false;
      }
    } else {
      newFriends[id].hasBeenPicked = true; 
      score++;
    } 
    newFriends.sort(() => Math.random() - 0.5);
    this.setState({ newFriends });
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
      <p><h3>Clicky Game</h3> </p>
      <p>Score = {score}</p>
      <p>High Score = {highScore}</p>
      
        {this.state.friends.map((friend, i) => (
          <FriendCard
            randomShuffle={this.randomShuffle}
            id={friend.id}
            image={friend.image}
            index={i}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
