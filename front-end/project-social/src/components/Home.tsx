import "./Home.css";
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();

  const changeRouteToAccount = () => {
    navigate("/account")
  }

  const changeRouteToLogin = () => {
    navigate("/login");
  }
  return (
    <>
      <div className="fixedContent">
        <div>
          <button className="profile-box">
            <span className="text-white fw-bold"
              onClick={changeRouteToAccount}
            >PROFILE</span>
          </button>
          <button className="settings-box">
            <span className="text-white fw-bold">SETTINGS</span>
          </button>
        </div>

        <div>
          <button className="logout-box">
            <span className="text-white fw-bold"
              onClick={changeRouteToLogin}
            >LOGOUT</span>
          </button>
        </div>
      </div>

      <main>
        <div className="search-bar">
          <input 
          id="search"
          type="text"
          maxLength={50}
          placeholder="Buscar usuario"
          ></input>
        </div>

        <div className="home-container">
          <div className="feed-section">
            <p>Feed adasdwasdcontent...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
            <p>Feed content...</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
