import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/Register.module.css";
import { Input } from "./index";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const schema = yup
  .object({
    username: yup.string().required("Username is a required field"),
    password: yup.string().required("Passowrd is a required field"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  let userData = JSON.parse(localStorage.getItem("userdata"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = (data) => {
    setLoading(true);
    // getting the user from the localStorage by checking the submitted username
    const currentUser = userData.find(
      (user) => user.username === data.username
    );

    if (currentUser) {
      //checking if the enterd password matches the current user
      if (currentUser.password === data.password) {
        toast.success("Sign in Successful");
        //check if the user have admin permission
        if (currentUser.role === "admin") {
          navigate("/user/admin");
        } else {
          navigate(`/user/${currentUser.username}`);
        }
      } else {
        toast.error("Incorrect Password");
      }
    } else {
      toast.error("Incorrect Username");
    }
    setLoading(false);
  };

  return (
    <div className={styles["signup"]}>
      <Toaster />
      <h1 className={styles["title"]}>Login Form</h1>
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
          id="password"
          placeholder="Set your passoword"
          type="passsword"
          label="Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
        <button disabled={loading} className={styles["button"]}>
          {loading ? "Loading..." : "Sign In"}
        </button>

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
