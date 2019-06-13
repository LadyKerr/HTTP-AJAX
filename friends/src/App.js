import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      friends: [],
      postNewFriend: '',
    }
  }

  //setState to friends: res.friends
  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  postFriend = friend => {
    axios.post("http://localhost:5000/friends", friend)
    .then(response => {
      console.log(response);
      this.setState({
        postNewFriend: response.data.newFriend
      });
    })
  }

  render () {
    return (
      <div className="App">
        <Friends 
          friendsData={this.state.friends}
          postFriend={this.postFriend}
        />
      </div>
    );
  }
}

export default App;
