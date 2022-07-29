import { Button } from "antd";
import { useState } from "react";

const ClearButton = (props) => {
  const [hovering, setHovering] = useState(false);

  const hoverStyle = {
    backgroundColor: "#00B1A4",
  };

  const clearBtnStyle = {
    backgroundColor: "#0092A3",
  };

  return (
    <Button
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        ...(hovering ? hoverStyle : clearBtnStyle),
        minWidth: '350px',
        height: "80px",
        fontSize: "1.6em",
        marginTop: "15px",
        marginLeft: "21px",
        marginRight: "21px",
        fontWeight: "bold",
        color: "white",
        borderWidth: "2px",
        borderStyle: 'solid',
        borderColor: 'white',
        cursor: "pointer",
        borderRadius: '45px',
        userSelect: 'none'
      }}
      onClick={props.handleClear}
    >
      {props.children}
    </Button>
  );
};

export default ClearButton;
