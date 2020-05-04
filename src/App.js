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
  const [valid,setValid]= useState(false)
  // const [image]
  // console.log('lobby is:',lobby)
  // var list = [{ 'name': 'Bobs Game', 'number': '5', 'id': '878' }]



  function countInversions (size,pos,array){ //
    // console.log('teststoiajoiajsdoijo')
    let oldPosY = Math.floor((pos) / size);
    let oldPosX = pos % size;
    let inversions = 0;
    let tileNum = pos;
    let lastTile = size * size;
    let tileValue = oldPosY * size + oldPosX;
    for (let q = tileNum + 1; q < lastTile; ++q) {
      let k = q % size;//y
      let l = Math.floor(q / size);//x
      let newPosY = k
      let newPosX = l
      let tempPos = ((newPosY) * size) + (newPosX)
      // console.log('testing',tempPos)
      let compValue = (Math.floor(array[tempPos] / size)) * size + ((array[tempPos]%size));

      if (tileValue > compValue && tileValue != (lastTile - 1)) {
        ++inversions;
      }
    }
    return inversions;
  }
  const sumInversions=(size,random)=> {
    let inversions = 0;
    console.log('size size',size)
    for (let j = 0; j < size; ++j) {
      for (let i = 0; i < size; ++i) {
        let newPos = ((j) * size) + (i)
        inversions += countInversions(size,newPos, random);
      }
    }
    return inversions;
  }
  const sumInversions2=(random)=>{
    console.log('random is ',random)
    let count=0;
    for(let i=0;i<random.length-1;i++){
      for(let j=i+1;j<random.length;j++){
        if(random[i]>random[j])
        count++;
      }
    }
    return count;
  }
  function isSolvable2(size,random) {
    return (sumInversions2(random) % 2 == 0)
  }
  function isSolvable(size,random) {
    return (sumInversions(size,random) % 2 == 0)
  }
  
  const handleRegisterPress = (value) => {

    var tempArray=[];
    do{
      tempArray=[];
      for(let i=0;i<value*value-1;i++){
        tempArray.push(i);
      }
      tempArray.sort(() => Math.random() - 0.5);
      console.log(tempArray)
      console.log('is solvable:',isSolvable(value,tempArray))
      console.log('is solvable2:',isSolvable2(value,tempArray))
      
    }
    while(!isSolvable2(value,tempArray))
    console.log('pre sums',tempArray)
    console.log('sum inversions1:',sumInversions(value,tempArray))
    console.log('sum inversions2:',sumInversions2(tempArray))
    console.log('is solvable:',isSolvable(value,tempArray))
    console.log('is solvable2:',isSolvable2(value,tempArray))
    if(isSolvable2(value,tempArray)){
      setRandom(tempArray);
      setSize(value);
      setValid(true)
    }
    // sumInversions([6,3,2,5,4,7,1,0])

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
  if (valid === false)
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
           <Game size={size} random={random} isSolvable={isSolvable}imageUrl={image}></Game>
        </div>
      </div>
    );
}

export default inject('SocketStore')(observer(App))
