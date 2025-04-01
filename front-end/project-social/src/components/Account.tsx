import { useState } from "react";
import "./Account.css";
import profilePic from "/home/noSecureOption/Projects/Social/front-end/project-social/profilePic.png";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";

function AccountPage() {
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
        </div>
      </div>

      <div className="credencials">
        <div className="info-row-user-login">
          <label className="label">user_login:</label>
          <span className="value">{account.user_login}</span>
        </div>

        <div className="info-row">
          <label className="label">Username:</label>
          <span className="value">{account.username}</span>
        </div>

        <button type="button" className="btn btn-dark text-dark">
          Change
        </button>

        <div className="info-row">
          <label className="label">Password:</label>
          <span className="value">
            {"*".repeat(account.user_password.length)}
          </span>
        </div>

        <button
          type="button"
          className="btn btn-dark text-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Change
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                  id="password"
                  type="password"
                  maxLength={20}
                  placeholder="New password"
                ></input>
                <input
                  id="password"
                  type="password"
                  maxLength={20}
                  placeholder="Confirm new password"
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
                <button type="button" className="btn btn-primary text-dark">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
