import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
// import "./Header.css";


const HeaderPublic = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const [search, setSearch] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    }  else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/profile") {
      setActiveTab("Profile");
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
      history.push(`/search?name=${search}`);
      setSearch("");

  }
  return (
    <div className="header">
      <p className="logo">Contact Management System App</p>
      <div className="header-right">
        <form onSubmit={handleSubmit} style={{ display: "inline"}}>
          <input 
            type="text"
            className="inputField"
            placeholder="Search Name ..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          
        </form>
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>

        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
        
       
      </div>
    </div>
  );
};

export default HeaderPublic;