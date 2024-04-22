import React, { ChangeEvent } from "react";
import logo from "../../images/logo.webp";
import { useNavigate } from "react-router-dom";

type Props = {
  search: string;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export default function Header(props: Props) {
  const { search, onHandleChange } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src={logo}
                alt="smalllogo"
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  marginLeft: "-200px",
                }}
              />
            </a>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control p-3 mb-2 bg-white text-dark"
                placeholder="What do you want to listen to?"
                aria-label="Search"
                style={{ height: "50px", width: "900px", marginLeft: "100px" }}
                value={search}
                onChange={onHandleChange}
              />
            </form>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  width: "90px",
                  height: "50px",
                  marginLeft: "160px",
                  marginBottom: "5px",
                }}
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
