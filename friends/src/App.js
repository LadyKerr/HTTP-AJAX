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

  postFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        console.log(res);
        this.setState({ postNewFriend: res.data});
      })
      .catch(err => {
        console.log(err);
    })
  }

  // updateFriend = () => {
  //   axios
  //     .put(`http://localhost:5000/friends/${friend.id}`, friend)
  //     .then(res => {
  //       console.log(res)
  //       this.setState({ 
  //         friends: res.data,
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }


  deleteFriend = (e, friend) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className="App">
        <Friends 
          friendsData={this.state.friends}
          deleteFriend={this.deleteFriend}
          //  updateFriend={this.updateFriend}
        />
        <FriendsForm 
         postFriend={this.postFriend}
        />
      </div>
    );
  }
}

export default App;
