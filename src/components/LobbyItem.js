import React, { useState,useEffect, Component } from "react";
import './LobbyItem.css'

function LobbyItem(props) {

  return (
    <div className="LobbyItem" onClick={e=>{console.log('clicked on lobby item')
        props.handleLobbyPress(props.data.id)}}>
      <div>
          {props.data.name.substring(0,10)}     
      </div>
      <div>
           Players:{props.data.number}/8
      </div>
    </div>
  );
}

export default LobbyItem;
