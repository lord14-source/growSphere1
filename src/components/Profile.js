import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img src={user.picture} alt={user.name} className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8">
            <h2>{user.name}</h2>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Nickname: </strong>{user.nickname}</p>
            {/* You can add more details if available */}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
