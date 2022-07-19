import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

const Loader = () => (
  <AppLoading>
    <AppLoadingContents>
      <img
        src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
        alt="Slack"
      />
      <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
    </AppLoadingContents>
  </AppLoading>
);

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 80px;
  }
`;

export default Loader;
