import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  let { userId } = useParams();
  let loggedInUser = JSON.parse(localStorage.getItem("userdata")).find(
    (user) => user.id === Number(userId)
  );

  //function for user logout
  const handlelogout = () => {
    localStorage.setItem("AuthUser", false);
    navigate("/login");
  };
  return (
    <div className={styles["container"]}>
      <h1>Welcome {loggedInUser.username}</h1>
      <button className={styles["logout"]} onClick={handlelogout}>
        Logout
      </button>
      <p>Your Mail Id : {loggedInUser.email}</p>
    </div>
  );
};

export default Home;
