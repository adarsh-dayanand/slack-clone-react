import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebaseConfig";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Loader from "./components/Loader";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Home />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
