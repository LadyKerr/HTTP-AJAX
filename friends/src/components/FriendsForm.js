import React from 'react';

class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = e => {
    e.preventDefault();
    this.props.postFriend(this.state.friends);
    this.setState({
      friends: {
        name: '',
        age: '',
        email: ''
      }
    });
  }

  render() {
    return(
      <div>
        <h2>New Friends, Welcome!</h2>
        <form onSubmit={this.postFriend}>
          <input 
            type="text"
            name="name" 
            placeholder="Name" 
            onChange={this.handleChange}
            value={this.state.friends.name}
            />
          
          <input 
            type="number"
            name="age" 
            placeholder="Age" 
            onChange = {this.handleChange}
            value={this.state.friends.age}
            />
          
          <input 
            type="email"
            name="email" 
            placeholder="Email" 
            onChange={this.handleChange}
            value={this.state.friends.email}
            />
            <button type="submit">POST New Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;