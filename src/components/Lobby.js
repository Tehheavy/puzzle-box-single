import React, { useState, useEffect, Component } from "react";
import LobbyItem from './LobbyItem'
import './Lobby.css'

function Lobby(props) {
  if (props.List.length > 0) {
    const content = props.List.map(id => {
      console.log(id)
      return (
        <LobbyItem data={id} key={id.id} handleLobbyPress={props.handleLobbyPress} ></LobbyItem>
      );
    });
    return <div className="Lobby">{content}</div>
  }
  else
    return <div className="Lobby"></div>
}


export default Lobby;
