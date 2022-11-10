import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/Register.module.css";
import { Input } from "./index";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is a required field")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address"
      ),
    password: yup.string().required("Passowrd is a required field"),
  })
  .required();

const Login = () => {
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
      <h1 className={styles["title"]}>Login Form</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
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
        <button className={styles["button"]}>Sign In</button>
        <p className={styles["toggle"]}>
          Don't have an account?
          <Link to="/register" className={styles["link"]}>
            {" "}
            Create
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
