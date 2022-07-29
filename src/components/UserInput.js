import { Input } from "antd";

const UserInput = (props) => {
  return (
    <Input
      style={{
        height: "75px",
        borderRadius: "50px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "30px",
        backgroundColor: "#121f33",
        color: "white",
        padding: "11px 30px 11px 11px",
        margin: " 1pc solid #888",
        boxShadow: "-1px 4px 1px 1px white",
        textAlign: 'right'
      }}
      value={props.input}
    />
  );
};

export default UserInput;
