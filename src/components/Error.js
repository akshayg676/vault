import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Error.module.css";

const Error = () => {
  return (
    <div className={styles["errorContainer"]}>
      <h1 className={styles["errorTxt"]}>404 not found🙄</h1>
      <Link to="/login" className={styles["link"]}>
        <button className={styles["button"]}>Home</button>
      </Link>
    </div>
  );
};

export default Error;
