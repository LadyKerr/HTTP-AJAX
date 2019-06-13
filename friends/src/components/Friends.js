import React from 'react';


const Friends = props => {
  return (
    <div>
      <h1>Welcome Lambda Friends!</h1>
      {props.friendsData.map(person => (
        <div key={person.id}>
          <h2> Name: {person.name} </h2>
            <h3> Age: {person.age} </h3>
            <h3> Email: {person.email} </h3>
        </div>
      ))}
    </div>
  );
}
export default Friends;