import React, { useState, useEffect, Component,useRef, useLayoutEffect } from "react";

function GameItem(props) {
    const [height, setheight] = useState(0);
    const [width, setwidth] = useState(0);
    const canvasRef = useRef(null);


    useEffect(() => {
        let position=props.index
        let oldPosY=Math.floor((position)/props.size);
            let oldPosX=position%props.size;
        // console.log('generated cube (x,y):','(',oldPosX,',',oldPosY,')')
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            props.handleChangeSize(img.height,img.width+20)
            let img_width = img.width/props.size;
            let img_height = img.height/props.size;
            setheight(img_height);
            setwidth(img_width);
            ctx.drawImage(img, img_width*oldPosX, img_height*oldPosY, img_width, img_height, 0, 0, img_width, img_height);
            
        }
        img.src = props.imageUrl

      }, [height,width]);
    return (
        <div>
            {/* {props.children} */}
            <canvas ref={canvasRef} height={height+'px'} width={width+'px'}></canvas>
        </div>
    );
}

export default GameItem;