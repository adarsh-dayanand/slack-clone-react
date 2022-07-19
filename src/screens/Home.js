import React from 'react';
import styled from 'styled-components';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <HomeContainer>
      <Chat />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  flex: 1;
  flex-direction: row;
  overflow-y: scroll;
`;

export default Home;