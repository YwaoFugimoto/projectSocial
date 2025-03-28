import { useState } from "react";
import "./Account.css";
import profilePic from "/home/noSecureOption/Projects/Social/front-end/project-social/profilePic.png";
import { useNavigate } from "react-router-dom";

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
          {" "}
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

        <button type="button" className="btn btn-dark text-dark">
          Change
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
