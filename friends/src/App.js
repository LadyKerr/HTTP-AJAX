import React from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import Home from "./components/Home"
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      friends: [],
      error: '',
      activeFriend: null
    }
  }

  
  //setState to friends: res.data from get request
  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(res => this.setState({ friends: res.data }))
    .catch(err => this.setState({ error: err }))
  }

  //add new friend to state on server with post request
  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => this.setState({ friends: res.data}))
      .catch(err => console.log(err))
  }

  //update friend data on server with put request
  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => this.setState({ friends: res.data }) )
      .catch(err => console.log(err))
  };

//delete friend from server with delete request
  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }) )
      .catch(err => console.log(err))
  }

  //function for when friend is updated
  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({ activeFriend: friend })
  }

  render () {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route 
          exact path={"/friends-list" }
          render={(props) => <> 
            <FriendsForm addFriend={this.addFriend} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} /> 
            <FriendsList {...props} friendsData={this.state.friends} setUpdateForm={this.setUpdateForm} deleteFriend={this.deleteFriend} />
          </>}
        /> 
      </div>
    );
  }
}

export default withRouter (App);
