import React, { useState,useEffect, Component } from "react";
import './LobbyItem.css'

function GameLobbyItem(props) {

  return (
    <div className="LobbyItem" onClick={e=>{console.log('clicked on lobby item')
       }}>
      <div>
           {props.data.name}
      </div>
    </div>
  );
}

export default GameLobbyItem;
