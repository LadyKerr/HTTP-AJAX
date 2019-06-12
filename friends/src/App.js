import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      friends: []
    }
  }

  //setState to friends: res.friends
  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(resolved => {
      console.log(resolved);
      this.setState({ friends: resolved.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render () {
    return (
      <div className="App">
        <Friends 
        friendsData={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
