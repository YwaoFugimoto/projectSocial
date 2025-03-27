import React, { useState } from "react";
import "./Account.css";

function AccountPage() {
  const [account] = useState({
    username: "John Doe",
    user_login: "john123",
    user_password: "mysecretpassword",
  });

  return (
    <div className="account-page">
      <div className="account-box">
        {/* Profile Photo Placeholder */}
        <div className="photo-container">
          <span className="photo-text">profile photo</span>
        </div>

        <div className="credencials">
            <div className="info-row">
            <label className="label">Username:</label>
            <span className="value">{account.username}</span>
            </div>

            <div className="info-row">
            <label className="label">user_login:</label>
            <span className="value">{account.user_login}</span>
            </div>

            <div className="info-row">
            <label className="label">Password:</label>
            <span className="value">
                {"*".repeat(account.user_password.length)}
            </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
