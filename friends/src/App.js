import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import FriendsForm from './components/FriendsForm';

import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      friends: [],
      postNewFriend: '',
    }
  }

  //setState to friends: res.data
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

  //add new friend to state on server
  postFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res);
        this.setState({ postNewFriend: res.data});
      })
      .catch(err => {
        console.log(err);
    })
  }

  //update friend data on server
  putFriend = () => {
    const updateFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .put("http://localhost:5000/friends/4", updateFriend)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      this.setState({ name:'', age:'', email:'' })
  };

//delete friend from server
  deleteFriend = () => {
    axios
      .delete("http://localhost:5000/friends/2")
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="App">
        <Friends 
          friendsData={this.state.friends}
          deleteFriend={this.deleteFriend}
          putFriend={this.putFriend}
        />
        <FriendsForm 
         postFriend={this.postFriend}
        />
      </div>
    );
  }
}

export default App;
