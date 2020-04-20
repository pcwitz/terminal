import React from "react";

const defaultStyles = {
  fontFamily:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  fontSize: 16,
};

const Usage = () => {
  const styles = {
    ...defaultStyles,
  };
  return (
    <pre style={styles}>{`
usage: pcwitz [--version] [--help]
              [-b | --bio] [-e | --edu]
              [-x | --experience] [-p | --projects]
              [-t | --tech]

These are common pcwitz commands used in various situations:

need to know who is Perry Abramowitz
   bio          Biography

discover where Perry Abramowitz has learned and worked
   edu          Educational milestones
   experience   Work experience past to present

list Web projects highlighting Perry's development skills
   projects     Projects and accomplishments 

view technologies Perry works with and 
   tech         Technology stack used to build software applications

'pcwitz help -a' and 'pcwitz help -g' list available subcommands and some
concept guides. See 'pcwitz help <command>' or 'pcwitz help <concept>'
to read about a specific subcommand or concept.`}</pre>
  );
};

export default Usage;
