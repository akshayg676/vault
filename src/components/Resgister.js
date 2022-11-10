import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/Register.module.css";
import { Input } from "./index";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required("Username is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address"
      ),
    password: yup
      .string()
      .required("Passowrd is a required field")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup
      .string()
      .required("Confirm password is a required field")
      .oneOf(
        [yup.ref("password")],
        "Password and confirm password doens't match"
      ),
  })
  .required();

const Resgister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = (data) => console.log(data);

  return (
    <div className={styles["signup"]}>
      <h1 className={styles["title"]}>Registration Form</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          id="username"
          placeholder="Enter your name"
          type="text"
          label="Username"
          register={{ ...register("username") }}
          errorMessage={errors.username?.message}
        />
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          label="Email"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <Input
          id="password"
          placeholder="Set your passoword"
          type="passsword"
          label="Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
        <Input
          id="confirmPassword"
          placeholder="Confirm passoword"
          type="passsword"
          label="Confirm Password"
          register={{ ...register("confirmPassword") }}
          errorMessage={errors.confirmPassword?.message}
        />
        <button className={styles["button"]}>Sign Up</button>
        <p className={styles["toggle"]}>
          Already have an account?
          <Link to="/login" className={styles["link"]}>
            {" "}
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Resgister;
