import { Button, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebaseConfig";
import firebase from "firebase/compat/app";
import { Alert } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setIput] = useState("");
  const [user] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    if (input.trim().length === 0) {
      return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please enter the message
          </Alert>
        </Snackbar>
      );
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input.trim(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setIput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setIput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

export default ChatInput;
