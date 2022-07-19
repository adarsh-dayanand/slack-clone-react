import React from 'react';
import styled from 'styled-components';

const SidebarOptions = ({Icon, title, addChannelOption}) => {

  const addChannel = () => {}
  
  const selectChannel = () => {}

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      { Icon && <Icon fontSize='small' style={{padding: 10}} /> }
      {
      Icon ? (
        <h3>
          {title}
        </h3>
      ): (
      <SidebarOptionChannel>
        <span>#</span> {title}
      </SidebarOptionChannel>
      )
      }
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 2px;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340E36;
  }

  > h3{
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div`

`;

export default SidebarOptions;