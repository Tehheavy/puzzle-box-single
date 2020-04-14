import React, { useState, useEffect, Component } from "react";
import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Game from './components/Game'
import { observer, inject } from 'mobx-react'; //These functions make our components observable and be able to use the store
function App({ SocketStore }) {
  const [size, setSize] = useState("");
  const [random, setRandom] = useState([]);
  const [image,setImage] = useState('');
  // const [image]
  // console.log('lobby is:',lobby)
  // var list = [{ 'name': 'Bobs Game', 'number': '5', 'id': '878' }]

  const handleRegisterPress = (value) => {

    let tempArray=[];
    for(let i=0;i<value*value-1;i++){
      tempArray.push(i);
    }
    tempArray.sort(() => Math.random() - 0.5);
    console.log(tempArray)
    setRandom(tempArray);
    setSize(value);

  }
 
  useEffect(() => {
    let images =['https://i.imgur.com/YLWsY4G.jpg','https://i.imgur.com/Irg9QIx.jpg','https://i.imgur.com/W9U5y71.jpg']
    let randomIndex=Math.floor(Math.random() * images.length)
    setImage(images[randomIndex])
    // console.log('pre ',success)
    // var person="";
    // while(!person){
    //  person = prompt("Please enter your name", "BOB");
    //     console.log(person)
    // } 
    // console.log("asdasdsad")
    // setUsername(person)
    // console.log(person)
  }, []);
  if (size === "")
    return (<div className="App">
      {/* <LobbyRegister visible={lobby}></LobbyRegister> */}
      {/* <Register handleRegisterPress={handleRegisterPress} /> */}
      <Register handleRegisterPress={handleRegisterPress}></Register>
    </div>
    );
  else
    return (
      <div className="App">
        <div className="Lobby-class">
           <Game size={size} random={random} imageUrl={image}></Game>
        </div>
      </div>
    );
}

export default inject('SocketStore')(observer(App))
