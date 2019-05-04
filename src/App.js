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
  
  // This function shuffles all the images in the array randomly. It also checks to see if user picks the same card twice and
  // if user dose pick the same images twice the user looses game and an alert message is displayed. This function also
  //  checks to see if the user has not pick the image. It then updates the score variable. If the score is higher than high score
  //  than the score becomes the new high score. It lastly checks to see if the user has won the game by correctly pick all the 
  //  the images once.

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
      if ( score === 12){
        highScore = score;
        alert("You won the game");
        score = 0;
      };
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
