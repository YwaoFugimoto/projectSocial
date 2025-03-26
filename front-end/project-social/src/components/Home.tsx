import "./Home.css";

function Home() {
  return (
    <>
      <div className="fixedContent">
        <div>
          <button className="profile-box">
            <span className="text-white fw-bold">PROFILE</span>
          </button>
          <button className="settings-box">
            <span className="text-white fw-bold">SETTINGS</span>
          </button>
        </div>

        <div>
          <button className="logout-box">
            <span className="text-white fw-bold">LOGOUT</span>
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
