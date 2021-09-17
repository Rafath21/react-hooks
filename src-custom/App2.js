import Display from './Display';
import Form from './Form';
import {useState} from "react";


function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [number, setNumber] = useState("");
  let [theme, setTheme] = useState("Dark");
  return (
    <div className="my-container">
      <Display name={name} email={email} number={number} theme={theme}/>
      <Form handleName={setName} handleEmail={setEmail} handleNumber={setNumber} handleTheme={setTheme} theme={theme}/>
    </div>
  );
}

export default App;
