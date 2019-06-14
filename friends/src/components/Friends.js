import React from 'react';

const Friends = props => {
  return (
    <div className="friends-container">
      <h2>{props.friend.name}</h2>
      <h3> {props.friend.age} </h3>
      <h3> {props.friend.email} </h3>
      <button className="btn" onClick={(e) => props.setUpdateForm(e, props.friend)}> Update </button>
      <button className="btn" onClick={(e) => props.deleteFriend(e, props.friend.id)}> Delete </button>
    </div>
  );
}

export default Friends;