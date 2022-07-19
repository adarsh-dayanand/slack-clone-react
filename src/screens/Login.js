import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebaseConfig";

const Login = () => {

  const signinWithGoogle = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch(error => alert(error.message));
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="Slack"/>

        <h1>Signin to the AD Slack App</h1>
        <p>ad.slack.com</p>

        <Button onClick={signinWithGoogle}>Signin with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: #F8F8F8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`

  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  >button {
    margin-top: 50px;
    text-transform: uppercase !important;
    background-color: #0A8D48 !important;
    color: white;
  }
`;

export default Login;
