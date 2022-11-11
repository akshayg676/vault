import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
    localStorage.setItem("AuthAdmin", false);
    navigate("/login");
  };
  return (
    <div className={styles["container"]}>
      {loggedInUser ? (
        <>
          <h1>Welcome {loggedInUser?.username}</h1>
          <button className={styles["logout"]} onClick={handlelogout}>
            Logout
          </button>
          <p>Your Mail Id : {loggedInUser?.email}</p>
        </>
      ) : (
        <>
          <h1>Login to continue</h1>
          <button className={styles["logout"]}>
            <Link className={styles["link"]} to="/login">
              Login
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
