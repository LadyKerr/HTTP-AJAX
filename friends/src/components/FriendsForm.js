import React from 'react';

const FriendsForm = () => {
  return(
    <div>
      <h2>New Friends, Welcome!</h2>
      <form>
        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="enter age" />
        <input type="email" placeholder="enter email" />
      </form>
    </div>
  );
}

export default FriendsForm;