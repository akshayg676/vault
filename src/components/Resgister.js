import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Register.module.css";
import { Input } from "./index";
const Resgister = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles["signup"]}>
      <h1 className={styles["title"]}>Registration Form</h1>
      <form action="">
        <Input
          id="username"
          placeholder="Enter your name"
          type="text"
          label="Username"
        />
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          label="Email"
        />
        <Input
          id="password"
          placeholder="Set your passoword"
          type="passsword"
          label="Password"
        />
        <Input
          id="confirmPassword"
          placeholder="Confirm passoword"
          type="passsword"
          label="Confirm Password"
        />
        <button className={styles["button"]}>Sign Up</button>
      </form>
    </div>
  );
};

export default Resgister;
