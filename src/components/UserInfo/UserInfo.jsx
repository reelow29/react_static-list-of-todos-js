import React from 'react';


export const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <p className="UserInfo__name">{user.name}</p>
    </div>
  );
};
