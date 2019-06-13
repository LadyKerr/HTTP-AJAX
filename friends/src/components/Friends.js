import React from 'react';


const Friends = props => {
  return (
    <div className="friends-container">
      <h1>Welcome Lambda Friends!</h1>
      {props.friendsData.map(person => (
        <div key={person.id} className="friends-card">
          <h2> Name: {person.name} </h2>
            <h3> Age: {person.age} </h3>
            <h3> Email: {person.email} </h3>
            <button
              className="btn" 
              onClick={e => props.deleteFriend(e, person.id)}> 
              Delete Friend 
            </button>
        </div>
      ))}
    </div>
  );
}
export default Friends;