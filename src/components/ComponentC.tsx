import React from "react";
import { HeroStoreType, useHeroStore } from "../hooks/heroStore";

const ComponentC = () => {
  const heroes = useHeroStore((state: HeroStoreType) => state.heroes);

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
