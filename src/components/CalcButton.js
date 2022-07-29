import { Button } from "antd";
import { useState } from "react";

const operation = {
  backgroundColor: "#267faf",
};
const number = {
  backgroundColor: "#0f2e45",
};
const hoverOperation = {
  backgroundColor: '#2baac8'
}
const hoverNumber = {
  backgroundColor: '#185378'
}

const isAnOperation = (value) => isNaN(value);

const CalcButton = (props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Button
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        ...(isAnOperation(props.children) ? operation : number),
        ...(hovering? (isAnOperation(props.children) ? hoverOperation : hoverNumber) : null),
        height: "83px",
        flex: "1 1",
        alignItems: "center",
        fontSize: "38px",
        color: "white",
        borderRadius: "25px",
        border: "2px solid white",
        margin: "4px",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </Button>
  );
};
export default CalcButton;
