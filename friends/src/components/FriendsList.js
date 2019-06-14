import React from "react";
import Friends from './Friends';

const FriendsList = props => {
  return (
    <div>
      {props.friendsData.map(friend => (
        <Friends 
          friend={friend}
          key={friend.id}
          setUpdateForm={props.setUpdateForm}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </div>
  );
}

export default FriendsList;