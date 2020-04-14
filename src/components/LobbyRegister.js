import React, { useState, useEffect, Component } from "react";
import GameLobbyItem from './GameLobbyItem'
import './Lobby.css'

function GameLobby(props) {
  if (Object.keys(props.List).length){
    console.log('Game Lobby:',props.List)
    console.log('is visible')
    if (props.List.lobby.players.length > 0) {
      const content = props.List.lobby.players.map(id => {
        console.log('ids are',id)
        return (
          <GameLobbyItem key={id.id} data={id}></GameLobbyItem>
        );
      });
      return <div className="Lobby">
        <div>
          Player List:
        </div>
        {content}
        </div>
    }
    else
      return <div>IN LOBBY</div>
  }
  else
    return <div></div>
}


export default GameLobby;
