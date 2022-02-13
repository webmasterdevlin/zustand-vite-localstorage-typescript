import React from "react";
import ComponentB from "./ComponentB";

type Props = {};

const ComponentA = ({}: Props) => {
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
