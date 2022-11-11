import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Admin = () => {
  const navigate = useNavigate();
  let userList = JSON.parse(localStorage.getItem("userdata")).filter(
    (user) => user.role !== "admin"
  );

  //function for user logout
  const handlelogout = () => {
    localStorage.setItem("AuthUser", false);
    localStorage.setItem("AuthAdmin", false);
    navigate("/login");
  };
  return (
    <div className={styles["container"]}>
      <h1>Welcome Admin</h1>
      <button className={styles["logout"]} onClick={handlelogout}>
        Logout
      </button>
      {userList.length > 0 ? (
        <>
          <p>List of registered users :</p>
          <ul>
            {userList.map((user) => (
              <li>{user.username}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No registered user(s) found</p>
      )}
    </div>
  );
};

export default Admin;
