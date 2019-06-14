import React from 'react';
import { NavLink } from "react-router-dom";

class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.activeFriend || {
        name: '',
        age: '',
        email: '',
        id: 0
      },
      active: false
    }
  }

  componentDidMount(prevProps) {
    if ( this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend ) {
      this.setState({ friend: this.props.activeFriend, active: true })
    }
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({ friend: {...prevState.friend, [e.target.name]: e.target.value} }))
  }

  submitHandler = (e, friend) => {
    if ( this.state.active ) {
      this.props.updateFriend(e, this.state.friend)
    } else {
      this.props.addFriend(e, this.state.friend)
    }
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }, active: false
    });
  }

  render() {
    return(
      <div>
        <NavLink to="/" >Home</NavLink> <br/>
        <NavLink to="/friends-list" >View Friends</NavLink>
        <form onSubmit={this.submitHandler}>
          <input 
            type="text"
            name="name" 
            placeholder="Name" 
            onChange={this.handleChange}
            value={this.state.friend.name}
            required
            />
          
          <input 
            type="number"
            name="age" 
            placeholder="Age" 
            onChange = {this.handleChange}
            value={this.state.friend.age}
            required
            />
          
          <input 
            type="email"
            name="email" 
            placeholder="E-mail" 
            onChange={this.handleChange}
            value={this.state.friend.email}
            required
            />
          <button className="btn" >
            {` ${this.state.active ? "Update" : "Add Friend"} `}
        </button>
      </form>    
    </div>
    );
  }
}

export default FriendsForm;