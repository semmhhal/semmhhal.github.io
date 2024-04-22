import logo from "../images/logo.webp";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import musicServices from "../apis/services/music.services";

export default function LogIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await musicServices.signIn({
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.accessToken;
        const userId = response.data.id;
        const username = response.data.username;
        
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);
        navigate("/homepage");
      } else {
        console.log("LogIn failed", response.data);
        alert("Re-check your username and Password!");
      }
    } catch (e) {
      alert("Incorrect Password/username! try Again");
    }
  };

  return (
    <main
      className="container"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <form onSubmit={signIn}>
        <img
          className="rounded-circle"
          src={logo}
          alt="MusicLogo"
          style={{ width: "300px" }}
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div
          className="form-floating"
          style={{ width: "400px", marginLeft: "450px" }}
        >
          <input
            className="form-control"
            id="floatingInput"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingInput">username</label>
        </div>
        <div
          className="form-floating"
          style={{ width: "400px", marginLeft: "450px" }}
        >
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button type="submit">Sign in</button>
        </div>
        {/* <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p> */}
      </form>
    </main>
  );
}
