import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/Register.module.css";
import { Input } from "./index";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    setLoading(true);
    if (userData.some((user) => user.email === data.email)) {
      // check whether the user exists or not by comparing the unique email id.
      toast.error("An account wit this email already exists");
    } else {
      setUserData((prev) => [
        ...prev,
        {
          id: Date.now(),
          username: data.username,
          email: data.email,
          password: data.password,
          role: "client",
        },
      ]);
      localStorage.setItem(
        "userdata",
        JSON.stringify([
          ...userData,
          {
            id: Date.now(),
            username: data.username,
            email: data.email,
            password: data.password,
            role: "client",
          },
        ])
      );
      toast.success("User Registration Successful!");
      reset();
    }
    setLoading(false);
  };

  return (
    <div className={styles["signup"]}>
      <Toaster />
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
        <button disabled={loading} className={styles["button"]}>
          {loading ? "Loading..." : "Sign Up"}
        </button>
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
