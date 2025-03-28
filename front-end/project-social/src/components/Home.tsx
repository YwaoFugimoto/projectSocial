import "./Home.css";
import { useNavigate } from "react-router-dom";
import musicIcon from "/home/noSecureOption/Projects/Social/front-end/project-social/music-note-beamed.svg";
import emojiIcon from "/home/noSecureOption/Projects/Social/front-end/project-social/emoji-smile.svg";
import photoIcon from "/home/noSecureOption/Projects/Social/front-end/project-social/image.svg";

function Home() {
  const navigate = useNavigate();

  const changeRouteToAccount = () => {
    navigate("/account");
  };

  const changeRouteToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="fixedContent">
        <div>
          <button type="button" className="btn profile-box">
            <span className="text-black fw-bold" onClick={changeRouteToAccount}>
              PROFILE
            </span>
          </button>

          <button type="button" className="btn settings-box">
            <span className="text-black fw-bold">SEARCH</span>
          </button>
        </div>

        <div>
          <button type="button" className="btn logout-box">
            <span className="text-black fw-bold" onClick={changeRouteToLogin}>
              LOGOUT
            </span>
          </button>
        </div>
      </div>

      <main>
        <div className="post-pit">
          <div className="post-pit-bottom">
            
            <button type="button" className="btn" ><img src={emojiIcon} alt="Emoji" /></button>
            <button type="button" className="btn"><img src={photoIcon} alt="Photo" /></button>
            <button type="button" className="btn"><img src={musicIcon} alt="Music" /></button>
            <button type="button" className="btn btn-success post-pit-bottom-button">
              Post!
            </button>
          </div>

          <input
            className="post-bar"
            id="post"
            type="text"
            maxLength={300}
            placeholder="How you feeling today?"
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
