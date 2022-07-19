import React from "react";
import styled from "styled-components";

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img
        src={
          userImage ||
          "https://icon-library.com/images/facebook-user-icon/facebook-user-icon-4.jpg"
        }
        alt={user}
      />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 {
    text-transform: capitalize;
  }
  > h4 > span {
    color: gray;
    font-style: 100;
    margin-left: 4px;
    font-size: 10px;
  }

  > p {
    font-size: 15px;
    font-weight: 500;
  }
`;

export default Message;
