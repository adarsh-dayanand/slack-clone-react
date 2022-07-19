import React from "react";
import styled from "styled-components";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {

  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>PROGRAMMER</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOptions Icon={Drafts} title="Drafts" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & User Groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File Browser" />
      <SidebarOptions Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions Icon={Add} title="Add Channel" addChannelOption={true} />

      {channels?.docs.map((item) => (<SidebarOptions title={item.data().name} key={item.id} id={item.id} />))}

    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  display: flex;
  flex: 0.3;
  color: white;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  background-color: var(--slack-color);
  flex-direction: column;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  max-height: 30px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  justify-content: space-between;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

export default Sidebar;
