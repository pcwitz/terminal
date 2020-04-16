import React, { FormEvent, useState } from "react";

interface IProps {
  execute: (command: string) => void;
}

const Input = ({ execute }: IProps) => {
  const [command, setCommand] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    execute(command);
  };

  return (
    <form onSubmit={submit}>
      <input
        autoComplete="off"
        className="flex-1 input"
        onChange={(event) => setCommand(event.target.value)}
        spellCheck="false"
        value={command}
      />
    </form>
  );
};

export default Input;
