import React from 'react';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    //function here to get data
  }

  render () {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
