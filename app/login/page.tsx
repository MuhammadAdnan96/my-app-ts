"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { login } from "@/redux-toolkit/features/tokenSlice";
import Container from "@/components/inputContainer/inputContainer";
import axiosCall from "../../lib/axiosCall";

const Login = () => {
  const router = useRouter();
  // const dispatch = useDispatch();

  //   const token = useSelector((state:any) => state.tokenReducer.userToken);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginHandler = async () => {
    const tokenData = await axiosCall(userName, password, setError);
    // dispatch(login(tokenData));
    const cookies = new Cookies();
    cookies.set("userToken", tokenData);
    // if (token) {
    router.push("/products");
    // }
  };
  return (
    <div className="body">
      <Container
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        LoginHandler={LoginHandler}
      />
    </div>
  );
};
export default Login;
