import React from 'react';
import IUser from '../interfaces/IUser';

interface Props {
  user: IUser
};

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p> 
    </div>
  )
};

export default User;