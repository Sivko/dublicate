import React, { useContext } from "react";
import "./DotRing.css";
import useMousePosition from "@/hooks/useMousePosition";
import { MouseContext } from "@/context/mouse-context";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <div >
      <div
        style={{ left: `${x}px`, top: `${y}px`, transition: "all 100 liner" }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px`}}
      ></div>
    </div>
  );
};

export default DotRing;
