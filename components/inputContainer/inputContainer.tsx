import React from "react";
import InputField from "../inputField/inputField";
// import styles from "./styles/inputContainer.module.css";
import styles from "./container.module.css";

const Container = ({
  userName,
  setUserName,
  password,
  setPassword,
  LoginHandler,
  className,
}: any) => {
  return (
    <div className={styles.container}>
      <h2>Let's Login To Your Account First!</h2>

      <InputField
        className={styles.input}
        type="text"
        value={userName}
        placeholder="Username"
        label="Username: "
        onChange={(e: { target: { value: any } }) =>
          setUserName(e.target.value)
        }
        name={undefined}
      />
      <br />

      <InputField
        className={styles.input}
        type="password"
        value={password}
        placeholder="Password"
        label="Password:  "
        onChange={(e: { target: { value: any } }) =>
          setPassword(e.target.value)
        }
        name={undefined}
      />
      <br />
      <button className={styles.loginBtn} onClick={LoginHandler}>
        Login
      </button>
    </div>
  );
};

export default Container;
