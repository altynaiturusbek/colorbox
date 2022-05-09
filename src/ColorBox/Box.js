import React, { useRef, useState } from "react";
import './Box.css';

ColorBox.propTypes = {};

function ColorBox() {
  const [color, setColor] = useState("yellow");
  const colorRef = useRef("yellow");

  function getRandomColor(currentColor) {
    const colorList = ["red", "blue", "deeppink", "green"];
    const colorCurrentIndex = colorList.indexOf(currentColor);
    let newColorIndex = colorCurrentIndex;
    while (newColorIndex === colorCurrentIndex)
      newColorIndex = Math.trunc(Math.random() * colorList.length);
    return colorList[newColorIndex];
  }

  function handleBoxClick() {
    const newColor = getRandomColor(colorRef.current);
    setColor(newColor);
    console.log(newColor);
    colorRef.current = newColor;
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      {color}
    </div>
  );
}

export default ColorBox;
