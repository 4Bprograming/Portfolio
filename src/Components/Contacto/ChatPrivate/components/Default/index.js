import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";
//import {handleCreateChat2} from '../SidebarHeader/index'
import { auth, db } from "../../services/firebase";
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Default = () => {
  const [user] = useAuthState(auth);
  const handleCreateChat2 = () => {
    const emailInput = "4b.programming@gmail.com";

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const refChat2 = db
    .collection("chats")
    .where("aObTvQREFTdEty7C7oSV8IXwxHE3", "array-contains", user.email);
  const [chatsSnapshot2] = useCollection(refChat2);
console.log(chatsSnapshot2 ,"ver que trae")
  return (
    <C.Container>
      {
        chatsSnapshot2?.docs.length === 0 ? 
        <div>
          <C.Title>Chat 4B</C.Title>
          <C.Info>Click en el Logo para conversar.</C.Info>
        <MdMessage onClick={handleCreateChat2} />
        </div>
         :
        <div>
          <MdMessage />
          <C.Title>Chat 4B</C.Title>
          <C.Info>Ahora podrás emviar mensajes.</C.Info>
        </div>
      }
    </C.Container>
  );
};

export default Default;
