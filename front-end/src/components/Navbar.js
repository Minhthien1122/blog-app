import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=art" className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=art" className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=art" className="link">
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=art" className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=art" className="link">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
