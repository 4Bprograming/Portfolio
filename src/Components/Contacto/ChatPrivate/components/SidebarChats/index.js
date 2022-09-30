import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import * as C from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "../SidebarChatsItem";

const SidebarChats = ({ setUserChat, userChat }) => {
  const [user] = useAuthState(auth);
  console.log('user', user)
  console.log('setUser...', setUserChat)
  console.log('userchat...', userChat)
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
   
    const refChat2 = db
    .collection("chats")
    .where("user", "array-contains", user.email);
   console.log('refChat2', refChat2);
  const [chatsSnapshot] = useCollection(refChat);
  const [chatsSnapshot2] = useCollection(refChat2);
  console.log('chatsSnapshot', chatsSnapshot2)

  return (
    <C.Container>
      {user.email==='4b.programming@gmail'?
      chatsSnapshot?.docs.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          
          <C.Divider />
        </C.Content>
      )):
      chatsSnapshot?.docs.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          
          <C.Divider />
        </C.Content>
      ))
      
      }
    </C.Container>
  );
};

export default SidebarChats;
