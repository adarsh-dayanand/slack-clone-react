import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

import { db } from "../firebaseConfig";
import { selectRoomId } from "../redux/channelSlice";
import ChatInput from "./ChatInput";
import Message from "./Message";
import Loader from "./Loader";

const Chat = () => {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  const channelName = roomDetails?.data().name;
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {loading && <Loader />}
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{channelName}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined />
                Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((msg) => {
              const { message, timestamp, user, userImage } = msg.data();

              return (
                <Message
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={channelName}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  > h1 {
    color: black;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    /* text-transform: lowercase; */
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

export default Chat;
