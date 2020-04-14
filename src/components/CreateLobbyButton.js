import React, { useState, useEffect, Component } from "react";
import './CreateLobbyButton.css'

function CreateLobbyButton(props) {

    return (
        <div className="createLobbyButton-class" onClick={e=>{
            props.handleCreateLobbyPress()
        }}>
        <p>
            Create Lobby
         </p>
         </div>
    );
}

export default CreateLobbyButton;