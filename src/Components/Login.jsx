import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmitClick = (data) => {
    console.log(data);

    alert("login Successfully!!");
    reset();
    navigate("profile");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };
  return (
    <div className="form-container">
      <form className="login-form " onSubmit={handleSubmit(onSubmitClick)}>
        <div className="mail">
          <label htmlFor="email">Enter Your Email </label>
          <input
            {...register("email", {
              required: "Enter You Email",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address"
              }
            })}
            type="text"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span style={{ color: "red" }}> {errors.email.message}</span>
          )}
        </div>
        <div className="pass">
          <label htmlFor="password">Enter Your password </label>
          <input
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 5,
                message: "Enter atlest 5 digit"
              },
              maxLength: {
                value: 100000,
                message: "Enter atlest 6 digit"
              }
            })}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
