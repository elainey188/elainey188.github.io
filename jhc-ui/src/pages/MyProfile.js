import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function MyProfile() {
  const userProfile = {
    name: 'Elaine Nankanja',
    bio: 'I am a software Developer. I love to code and know how to do so in plenty of languages.',
    email: 'elainenankanja10@gmail.com',
    location: 'Oshawa',
    avatarUrl: 'https://img.freepik.com/free-icon/woman_318-157562.jpg?size=338&ext=jpg&uid=R95931260&ga=GA1.1.2032637184.1678495751&semt=ais'
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div className="avatar-frame">
        <img src={userProfile.avatarUrl} alt={userProfile.name} />
      </div>
      <h1>{userProfile.name}</h1>
      <p>
         {userProfile.bio}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{' '}
        {userProfile.email}
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Location:</strong>{' '}
        {userProfile.location}
      </p>
    </div>
  );
}

export default MyProfile;
