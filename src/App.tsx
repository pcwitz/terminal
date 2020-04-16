import React, { FormEvent, useState } from "react";
import "./App.css";
import Dot from "./components/Dot";
import Input from "./components/Input";
import Triangle from "./components/Triangle";

function App() {
  const [commands, setCommands] = useState([""]);
  const execute = (command: string) => {
    setCommands((commands) => [...commands, command]);
  };

  /*
  const execute = async () => {
    const result = await doIt(command);
  };
  */

  return (
    <div className="App">
      <div className="App-padding">
        <Dot color="#ff5e59" />
        <Dot color="#ffbe31" />
        <Dot color="#2aca43" />
        <p>Last login: Tue Apr 14 11:24:58 on ttys002</p>
        <ul>
          {commands.map((command: string, index: number) => (
            <li key={index.toString()}>{command}</li>
          ))}
        </ul>
        <div className="align-items-center display-flex">
          <Triangle />
          <Input execute={execute} />
        </div>
      </div>
    </div>
  );
}

export default App;
