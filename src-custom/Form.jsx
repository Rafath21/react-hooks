import useState from "react";
let Form = (props) => {
  return (
    <div className="form">
      <button
        className="my-theme-button"
        onClick={() => {
          if (props.theme == "Light") props.handleTheme("dark");
          else props.handleTheme("Light");
        }}
      >
        Theme-{props.theme}
      </button>
      <div className="all-inputs">
        <input
          placeholder="Name"
          value={props.name}
          onChange={(e) => {
            props.handleName(e.currentTarget.value);
          }}
        ></input>
        <input
          placeholder="Email"
          value={props.email}
          onChange={(e) => {
            props.handleEmail(e.currentTarget.value);
          }}
        ></input>
        <input
          placeholder="Phone"
          value={props.number}
          onChange={(e) => {
            props.handleNumber(e.currentTarget.value);
          }}
        ></input>
        <button>Submit</button>
      </div>
    </div>
  );
};
export default Form;
