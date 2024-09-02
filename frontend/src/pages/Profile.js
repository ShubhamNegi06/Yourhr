import React from 'react';
import { useAuth } from '../components/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"

const Profile = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <style>
        {`
          .profile-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            text-align: center;
          }
          .profile-title {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
            color: #333;
          }
          .profile-info {
            font-size: 18px;
            margin-bottom: 15px;
          }
          .btn-custom {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
          }
          .btn-custom:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="profile-container">
        {isLoggedIn ? (
          <>
            <h2 className="profile-title">Your Profile</h2>
            <p className="profile-info">Name: John Doe</p>
            <p className="profile-info">Email: johndoe@example.com</p>
            <button className="btn btn-custom" onClick={logout}>Logout</button>
          </>
        ) : (
          <h2 className="profile-title">Please Log In</h2>
        )}
      </div>

      <script>
        {`
          // You can add custom JavaScript here if needed
          console.log('Profile component loaded');
        `}
      </script>
    </div>
  );
};

export default Profile;
