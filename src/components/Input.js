import React from "react";
import styles from "../styles/Input.module.css";
const Input = ({ id, label, placeholder, type, register, errorMessage }) => {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <span className={styles["error-message"]}>{errorMessage}</span>
    </div>
  );
};

export default Input;
