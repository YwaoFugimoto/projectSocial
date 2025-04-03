import { useEffect, useState } from "react";
import "./Account.css";
import profilePic from "/home/noSecureOption/Projects/Social/front-end/project-social/profilePic.png";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";

function AccountPage() {

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/authStatus", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        console.log(response)
      }else{
        console.log('User not authorized');
        navigate('/login');
      }
    } catch (error) {
      console.error("Error checking auth status", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);
  
  const [account] = useState({
    username: "John Doe",
    user_login: "john123",
    user_password: "mysecretpassword",
  });

  const navigate = useNavigate();

  const changeRoute = () => {
    navigate("/home");
  };

  return (
    <div className="account-page">
      <div className="account-box">
        <button className="btn btn-success btn-back-home" onClick={changeRoute}>
          {`<`} Home
        </button>
        <div className="photo-container">
          <img src={profilePic} alt="Profile" className="profile-photo" />
          <div className="photo-overlay">
            <span>Change Photo</span>
          </div>
        </div>
      </div>

      <div className="credencials">
        <div className="info-row">
          <label className="label">user_login:</label>
          <span className="value">{account.user_login}</span>
        </div>

        <div className="info-row">
          <label className="label">Username:</label>
          <span className="value">{account.username}</span>
          <button
            type="button"
            className="btn btn-dark change-usernmae-btn"
            data-bs-toggle="modal"
            data-bs-target="#usernameModal"
          >
            Change
          </button>
        </div>

        <div className="info-row">
          <label className="label">Password:</label>
          <span className="value">
            {"*".repeat(account.user_password.length)}
          </span>
          <button
            type="button"
            className="btn btn-dark change-password-btn"
            data-bs-toggle="modal"
            data-bs-target="#passwordModal"
          >
            Change
          </button>
        </div>

        {/* <!-- Password Modal --> */}
        <div
          className="modal fade"
          id="passwordModal"
          tabIndex={-1}
          aria-labelledby="passwordModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="passwordModalLabel">
                  Change your password
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  id="confirmNewPassword"
                  type="password"
                  maxLength={20}
                  placeholder="Confirm new password"
                ></input>
                <input
                  id="newPassword"
                  type="password"
                  maxLength={20}
                  placeholder="New password"
                ></input>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary text-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-success text-dark">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Username Modal --> */}
      <div
        className="modal fade"
        id="usernameModal"
        tabIndex={-1}
        aria-labelledby="usernameModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="usernameModalLabel">
                Change your username
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                id="confirmNewUsername"
                type="text"
                maxLength={20}
                placeholder="Confirm new username"
              ></input>
              <input
                id="newUsername"
                type="text"
                maxLength={20}
                placeholder="New username"
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary text-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success text-dark">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
