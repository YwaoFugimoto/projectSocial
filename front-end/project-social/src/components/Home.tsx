import "./Home.css";
import { useNavigate } from "react-router-dom";
import musicIcon from "/home/noSecureOption/Projects/Social/front-end/project-social/music-note-beamed.svg";
import emojiIcon from "/home/noSecureOption/Projects/Social/front-end/project-social/emoji-smile.svg";
import photoIcon from "/home/noSecureOption/Projects/Social/front-end/project-social/image.svg";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from "react";

function Home() {

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

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ id: number; username: string }[]>([]);

  const navigate = useNavigate();

  const changeRouteToAccount = () => {
    navigate("/account");
  };

  const changeRouteToLogin = () => {
    navigate("/login");
  };

  // API calls here.  
  const allUsers = [
    { id: 1, username: "john123" },
    { id: 2, username: "janeDoe" },
    { id: 3, username: "alice1985" },
    { id: 4, username: "bob_the_builder" },
  ];

  const handleSearchChange = (e: { target: { value: any } }) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      // Filter users that contain the query (case-insensitive)
      const results = allUsers.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };




  return (
    <>
      <div className="fixedContent">
        <div>
          <button
            type="button"
            className="btn profile-box text-black"
            onClick={changeRouteToAccount}
          >
            PROFILE
          </button>

          <button
            type="button"
            className="btn settings-box text-black"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            SEARCH
          </button>
        </div>

        <div>
          <button
            type="button"
            className="btn logout-box text-black"
            onClick={changeRouteToLogin}
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Modal for user search */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title fs-5" id="exampleModalLabel">
                Search a user
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <div className="search-results">
                {searchResults.map((user) => (
                  <div key={user.id} className="search-result-item">
                    {user.username}
                  </div>
                ))}
              </div>

              <input
                className="search_user_bar"
                id="search_user"
                type="text"
                maxLength={20}
                placeholder="Username"
                onChange={handleSearchChange}
                value={searchQuery}
              />

            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="post-pit">
          <div className="post-pit-bottom">
            <button type="button" className="btn">
              <img src={emojiIcon} alt="Emoji" />
            </button>
            <button type="button" className="btn">
              <img src={photoIcon} alt="Photo" />
            </button>
            <button type="button" className="btn">
              <img src={musicIcon} alt="Music" />
            </button>
            <button
              type="button"
              className="btn btn-success post-pit-bottom-button"
            >
              Post
            </button>
          </div>

          <input
            className="post-bar"
            id="post"
            type="text"
            maxLength={300}
            placeholder="What music are you feeling today?"
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
