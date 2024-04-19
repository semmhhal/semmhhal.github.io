import React from "react";
import logo from "../images/logo.webp";

export default function LogIn() {
  return (
    <main
      className="container"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <form>
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
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
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
          <button className="btn btn-primary w-20 py-2" type="submit">
            Sign in
          </button>
        </div>
        {/* <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p> */}
      </form>
    </main>
  );
}
