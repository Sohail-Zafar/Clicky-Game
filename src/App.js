import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import HeaderBar from "./components/HeaderBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  randomShuffle = id => {
  const friends = this.state.friends.sort(() => Math.random() - 0.5); 
  this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
      <HeaderBar></HeaderBar>
        {this.state.friends.map(friend => (
          <FriendCard
            randomShuffle={this.randomShuffle}
            id={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
