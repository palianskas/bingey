import React from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
  const { id } = useParams();
  return (
    <div>
      <p>This is where you can view user info</p>
      <p>Viewing user info of {id}</p>
      <p>Watchlist table will be added here after title data is clear</p>
    </div>
  );
};

export default UserInfo;
