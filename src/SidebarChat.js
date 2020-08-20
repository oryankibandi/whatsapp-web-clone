import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createNewChat = () => {
    const roomName = prompt("Please enter name for chat room");

    if (roomName) {
      //do somee database stuff here
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar-chat">
        <Avatar src={`https:avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat__info">
          <h2>{name}</h2>
          <p className="message__preview">{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createNewChat} className="sidebar-chat">
      <h2>add new chat</h2>
    </div>
  );
}

export default SidebarChat;
