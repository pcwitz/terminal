import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { commands } from "./commands/commands";
import Dot from "./components/Dot";
import Input from "./components/Input";
import Tilde from "./components/Tilde";
import Triangle from "./components/Triangle";
import Usage from "./responses/Usage";

type SetCommandCallback = (n: string) => void;
type SetHistoryCallback = (n: any[]) => void;

const handleClearCommand = (
  setHistory: SetHistoryCallback,
  setCommand: SetCommandCallback
): void => {
  setCommand("");
  setHistory([]);
};

const handleStandAloneCommand = (
  command: string,
  history: any[],
  setHistory: SetHistoryCallback,
  setCommand: SetCommandCallback
): void => {
  setCommand("");
  setHistory([...history, <Usage />]);
};

const handleUnknownCommand = (
  command: string,
  history: any[],
  setHistory: SetHistoryCallback,
  setCommand: SetCommandCallback
): void => {
  setCommand("");
  setHistory([
    ...history,
    `'${command}' is not a command. See 'pcwitz --help'.`,
  ]);
};

function App() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([""]);

  useEffect(() => {
    let element: HTMLElement = document.getElementById("bottom") as HTMLElement;
    element.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const execute = () => {
    if (command === "clear") {
      handleClearCommand(setHistory, setCommand);
      return;
    }
    if (command !== "pcwitz") {
      handleUnknownCommand(command, history, setHistory, setCommand);
      return;
    }
    if (command === "pcwitz") {
      handleStandAloneCommand(command, history, setHistory, setCommand);
      return;
    }

    /*
    const included = commands.includes(command);
    if (!included) {
      setHistory((history) => [
        ...history,
        `'${command}' is not a command. See 'pcwitz --help'.`,
      ]);
    } else {
      setHistory((history) => [...history, command]);
    }
    */
  };

  /*
  const execute = async () => {
    const result = await doIt(command);
  };
  */

  return (
    <div className="App">
      <div className="App-padding position-relative">
        <Dot color="#ff5e59" />
        <Dot color="#ffbe31" />
        <Dot color="#2aca43" />
        <p>Last login: Tue Apr 14 11:24:58 on ttys002</p>
        <ul>
          {history.map((component: any, index: number) => (
            <li key={index.toString()} id={index.toString()}>
              {component}
            </li>
          ))}
        </ul>
        <div id="bottom" className="align-items-center display-flex">
          <Triangle />
          <Tilde />
          <Input command={command} execute={execute} setCommand={setCommand} />
        </div>
      </div>
    </div>
  );
}

export default App;
