import React, { useState } from "react";
import api from "../configs/api";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post("/auth/register", {
            username,
            password
        });
        console.log(response);
    } catch (error) {
        setError(error.response?.data?.message || "خطایی رخ داده است.");
    }
  };
  return (
    <div>
      <form onSubmit={registerHandler}>
        <input
          type="text"
          name="name"
          placeholder="نام کاربری"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="تکرار رمز عبور"
        />
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
}

export default RegisterForm;
