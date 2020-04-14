import React, { useState, useEffect, Component,useRef, useLayoutEffect } from "react";

function GameImage(props) {
    const [height, setheight] = useState(0);
    const [width, setwidth] = useState(0);
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            let img_width = img.width;
            let img_height = img.height;
            setheight(img_height/props.size);
            setwidth(img_width/props.size);
            ctx.drawImage(img, 0, 0, img_width/props.size, img_height/props.size);
            
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

export default GameImage;