import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import firebase from 'firebase';
import { auth, provider } from "./firebase";

function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider)
    .then((result) => console.log(result))
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to whatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
