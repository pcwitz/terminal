import React, { FormEvent, useState } from "react";

interface IProps {
  command: string;
  execute: () => void;
  setCommand: (command: string) => void;
}

const Input = ({ command, execute, setCommand }: IProps) => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    execute();
  };

  return (
    <form className="flex-1" onSubmit={submit}>
      <input
        autoComplete="off"
        autoFocus
        className="input"
        onChange={(event) => setCommand(event.target.value)}
        spellCheck="false"
        value={command}
      />
    </form>
  );
};

export default Input;
