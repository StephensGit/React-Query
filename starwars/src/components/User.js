import React from 'react';

const User = ({ user }) => {
    // console.log(user);
  return (
    <div className="card">
      <h3>{ user.username }</h3>
      <p>Email - { user.name }</p>
      <p>EMail - { user.email }</p>
    </div>
  );
}
 
export default User;