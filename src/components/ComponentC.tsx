import React from "react";
import { useStore } from "../hooks/store";

const ComponentC = () => {
  const { heroes, addNewHero } = useStore();

  console.log("ComponentC rendered");

  return (
    <div>
      <h1>Component C</h1>
      <div>
        {heroes.map((hero) => (
          <div key={hero.id}>{hero.firstName}</div>
        ))}
      </div>
    </div>
  );
};

export default ComponentC;
