import React, { useState, useEffect, Component } from "react";
import styled from 'styled-components'
import GameItem from './GameItem'
import GameImage from './GameImage'
function Game(props) {
    const [position, setPosition] = useState(props.size * props.size - 1);// Search bar value
    const [array, setArray] = useState([]);
    const [height, setHeight] = useState('600px');
    const [width, setWidth] = useState('600px');
    const Title = styled.div`
        width: ${100 / props.size}%;
        box-sizing: border-box;
        `;

    const handleChangeSize = (newHeight, newWidth) => {
        // console.log('changed size')
        setHeight(newHeight)
        setWidth(newWidth)
    }
    const handleKeyPress = (event) => {
        // console.log('USER CLICKED:', event.key)
        // console.log('array:', array)
        if (event.key === 'ArrowDown') {
            // console.log('key ArrowDown')
            // console.log('current pos:', position)
            let oldPosY = Math.floor((position) / props.size);
            let oldPosX = position % props.size;
            // console.log('X,Y:', oldPosX, ',', oldPosY)
            let newPos = ((oldPosY + 1) * props.size) + (oldPosX)
            // console.log('swap with:', newPos, '(', (oldPosX), ',', (oldPosY + 1), ')')
            if ((oldPosY + 1) < props.size) {
                let oldArray = array;
                // console.log('Def array:')
                let tempValue = oldArray[newPos]
                // console.log('temparray:', tempValue)
                oldArray[newPos] = oldArray[position];
                oldArray[position] = tempValue;
                // console.log('SWAP SUCCESS new y=', oldPosY + 1)
                setPosition(prev => (((oldPosY + 1) * props.size) + (oldPosX)));
                setArray(prev => oldArray);
                checkWin(oldArray);
            }

        }
        if (event.key === 'ArrowUp') {
            // console.log('current pos:', position)
            let oldPosY = Math.floor((position) / props.size);
            let oldPosX = position % props.size;
            // console.log('X,Y:', oldPosX, ',', oldPosY)
            let newPos = ((oldPosY - 1) * props.size) + (oldPosX)
            // console.log('swap with:', newPos, '(', (oldPosX), ',', (oldPosY - 1), ')')
            if (newPos >= 0) {
                let oldArray = array;
                // console.log('Def array:')
                let tempValue = oldArray[newPos]
                // console.log('temparray:', tempValue)
                oldArray[newPos] = oldArray[position];
                oldArray[position] = tempValue;
                // console.log('SWAP SUCCESS')
                setPosition(prev => (((oldPosY - 1) * props.size) + (oldPosX)));
                setArray(prev => oldArray);
                checkWin(oldArray);
            }

        }
        if (event.key === 'ArrowLeft') {
            // console.log('key ArrowLeft', position)
            // console.log('array:', array)
            // console.log('current pos:', position)
            let oldPosY = Math.floor((position) / props.size);
            let oldPosX = position % props.size;
            // console.log('X,Y:', oldPosX, ',', oldPosY)
            let newPos = ((oldPosY) * props.size) + (oldPosX - 1)
            // console.log('swap with:', newPos, '(', (oldPosX - 1), ',', (oldPosY), ')')
            if ((oldPosX - 1) >= 0) {
                let oldArray = array;
                // console.log('Def array:')
                let tempValue = oldArray[newPos]
                // console.log('temparray:', tempValue)
                oldArray[newPos] = oldArray[position];
                oldArray[position] = tempValue;
                // console.log('SWAP SUCCESS')
                setPosition(prev => (((oldPosY) * props.size) + (oldPosX - 1)));
                setArray(prev => { return oldArray });
                checkWin(oldArray);
            }

        }
        if (event.key === 'ArrowRight') {
            // console.log('key ArrowRight')
            // console.log('array:', array)
            // console.log('current pos:', position)
            let oldPosY = Math.floor((position) / props.size);
            let oldPosX = position % props.size;
            // console.log('X,Y:', oldPosX, ',', oldPosY)
            let newPos = ((oldPosY) * props.size) + (oldPosX + 1)
            // console.log('swap with:', newPos, '(', (oldPosX + 1), ',', (oldPosY), ')')
            if ((oldPosX + 1) < props.size) {
                let oldArray = array;
                // console.log('Def array:')
                let tempValue = oldArray[newPos]
                // console.log('temparray:', tempValue)
                oldArray[newPos] = oldArray[position];
                oldArray[position] = tempValue;
                // console.log('SWAP SUCCESS')
                setPosition(prev => (((oldPosY) * props.size) + (oldPosX + 1)));
                setArray(prev => oldArray);
                checkWin(oldArray);
            }
        }
    }
    const clicktest=(event)=>{
    }
    const findPos=(value)=>{
        // console.log('findpos:',value)
        // for(let i=0;i<props.size*props.size;i++){
        //     console.log('asd')
        //     console.log(array[i])
            
        // }
    }
    const handleClick = (event,i) =>{
        if(event.path.length===12){
            // console.log('clicked',event,event.path.length)
            // console.log('id is:',event.path[2].id)
        }
        // console.log('array is',array)
        let indexLocation=0;
        for(let j=0;j<array.length;j++){
            if(event.path[2].id==array[j].key)
            {
                // console.log('found index',j)
                indexLocation=j     
            }
        }
        // console.log(array[indexLocation].key)
        let newPosY = Math.floor((indexLocation) / props.size);
        let newPosX = indexLocation % props.size;
        // console.log('X,Y:', newPosX, ',', newPosY)
        let oldPosY = Math.floor((position) / props.size);
        let oldPosX = position % props.size;
        // console.log('X,Y:', oldPosX, ',', oldPosY)
        if(newPosY==(oldPosY-1)&&oldPosX==newPosX){ //clicked above
            let oldArray = array;
            let tempValue = oldArray[indexLocation]
            oldArray[indexLocation] = oldArray[position];
            oldArray[position] = tempValue;
            // console.log('SWAP SUCCESS')
            setPosition(prev => (indexLocation));
            setArray(prev => oldArray);
            checkWin(oldArray);
            // findPos(event)
        }
        if(newPosY==(oldPosY+1)&&oldPosX==newPosX){ //clicked below
            let oldArray = array;
            let tempValue = oldArray[indexLocation]
            oldArray[indexLocation] = oldArray[position];
            oldArray[position] = tempValue;
            // console.log('SWAP SUCCESS')
            setPosition(prev => (indexLocation));
            setArray(prev => oldArray);
            checkWin(oldArray);
            // findPos(event)
        } 
        if(newPosY==(oldPosY)&&oldPosX==(newPosX+1)){ //clicked below
            let oldArray = array;
            let tempValue = oldArray[indexLocation]
            oldArray[indexLocation] = oldArray[position];
            oldArray[position] = tempValue;
            // console.log('SWAP SUCCESS')
            setPosition(prev => (indexLocation));
            setArray(prev => oldArray);
            checkWin(oldArray);
            // findPos(event)
        } 
        if(newPosY==(oldPosY)&&oldPosX==(newPosX-1)){ //clicked below
            let oldArray = array;
            let tempValue = oldArray[indexLocation]
            oldArray[indexLocation] = oldArray[position];
            oldArray[position] = tempValue;
            // console.log('SWAP SUCCESS')
            setPosition(prev => (indexLocation));
            setArray(prev => oldArray);
            checkWin(oldArray);
            // findPos(event)
        } 
        // console.log('handleClick array:',array,indexLocation)
      }
     
    const initArray = (size) => {
        // console.log('initArray size:', size)
        let temp = []
        for (let i = 0; i < size * size; i++) {
            // setArray([...array,<div>test</div>], ()=>{console.log('quadraped',array)})
            if (i !== size * size - 1) {
                // let randomColorValueR = Math.floor(Math.random() * 255);
                // let randomColorValueG = Math.floor(Math.random() * 255);
                // let randomColorValueB = Math.floor(Math.random() * 255);
                let randomColorValueR = Math.floor(Math.random() * 255);
                let randomColorValueG = Math.floor(Math.random() * 255);
                let randomColorValueB = Math.floor(Math.random() * 255);
                temp.push(<Title key={i} id={i}>
                    {/* <div style={{backgroundColor:'rgb('+randomColorValueR+','+randomColorValueG+','+randomColorValueB+')'}}> */}
                    <GameItem handleChangeSize={handleChangeSize} imageUrl={props.imageUrl} size={size} index={i}>{i}</GameItem>
                    {/* </div> */}
                </Title>)
            }
            else
                temp.push(<Title key={size*size-1}  id={i}><div></div></Title>)
        }

        //SHUFFLE ARRAY ALGORITHM HERE TODO:
        let RandomArray=[]
        for(let i=0;i<size*size-1;i++){
            RandomArray.push(temp[props.random[i]]);
        }
        console.log(props.random[0]+1,props.random[1]+1,props.random[2]+1,props.random[3]+1,props.random[4]+1,props.random[5]+1,props.random[6]+1,props.random[7]+1)
        RandomArray.push(temp[size*size-1]);
        // console.log('random arr is:',RandomArray)
        setArray(RandomArray);
        // console.log('setting array to:', temp)
    }
    const checkWin = (value) => {
        // console.log('check win:',value)
        // console.log(value[0])
        let test=0;
        let newArr=[]
        for(let i=0;i<value.length;i++){
            newArr.push(value[i].key)
        }
        console.log('iS solvable now?:',props.isSolvable(props.size,newArr))
        for(let i=0;i<props.size*props.size-1;i++){
            if(value[i].key==i){
                test++;
            }
            // console.log('TEST IS ',test)
        }
        if(test==(props.size*props.size-1)){
            alert("WIN!!")
        }
    }

    useEffect(() => {
        // console.log('refresh')
        if (array.length === 0){
            
            initArray(props.size);
        }
        for(let i=0;i<props.size*props.size;i++){
            // console.log(document.getElementById(i),'testtest')
            if(document.getElementById(i)){
                // console.log('exist')
                document.getElementById(i).addEventListener('click',handleClick)
            }
        }
        document.addEventListener("keydown", handleKeyPress, false);
        // console.log('created keydown event')
        return () => {
            document.removeEventListener("keydown", handleKeyPress, false);
            console.log('removed keydown event')
            for(let i=0;i<props.size*props.size;i++){
                // console.log(document.getElementById(i),'testtest')
                // console.log('deleting')
                if(document.getElementById(i)){
                    // console.log('exist')
                    document.getElementById(i).removeEventListener('click',handleClick)
                }
            }
        };
    }, [array, position]);
    return (
        <div className="flex-game">

            <div style={{width:'1rem'}}>
                Image:
                <GameImage size={3} imageUrl={props.imageUrl}></GameImage>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', height: height, width: width }} onKeyPress={e => { handleKeyPress() }}>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
                    {array}
                </div>

            </div>
            <div style={{height:'1rem'}}>
            </div>

        </div>
    );
}

export default Game;