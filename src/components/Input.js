import React from "react";
import styles from "../styles/Input.module.css";
const Input = ({ id, label, placeholder, type }) => {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
