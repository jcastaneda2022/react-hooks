import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(null);
  const [name, setName] = useState("");
  const [test, setTest] = useState("");

  const inputRef = useRef(null);
  const prevName = useRef("");

  // useEffect(() => {
  //   console.log("1");
  //   inputRef.current.focus();
  // });

  useEffect(() => {
    console.log("INPUT", prevName);
    prevName.current = input;
  }, [input]);

  useEffect(() => {
    console.log("NAME");
  }, [name]);

  useEffect(() => {
    console.log("TEST");
  }, [test]);

  return (
    <div className="App" style={{ padding: "100px" }}>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        style={{ height: "100px", width: "500px", fontSize: "50px" }}
        ref={inputRef}
        placeholder="Input"
      />
      <div style={{ fontSize: "50px" }}>
        My name is <span style={{ color: "blue" }}>{input}</span> and it used to
        be <span style={{ color: "red" }}>{prevName.current}</span>
      </div>

      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        style={{ height: "100px", width: "500px", fontSize: "50px" }}
        placeholder="Name"
      />

      <input
        value={test}
        onChange={(event) => {
          setTest(event.target.value);
        }}
        style={{ height: "100px", width: "500px", fontSize: "50px" }}
        placeholder="Test"
      />
    </div>
  );
}

export default App;
