import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeroModel, StoreType, useStore } from "./hooks/store";
import ComponentA from "./components/ComponentA";

function App() {
  const { heroes, addNewHero }: StoreType = useStore();
  return (
    <div className="App">
      <div>
        {/* hero was HeroModel, but became type 'any' after adding zustand persist */}
        {heroes.map((hero: HeroModel, i) => (
          <div key={hero.id + `${i}`}>{hero.firstName}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            addNewHero({
              id: "218r9ytgwuyfo",
              firstName: "New Hero",
              lastName: "New Hero",
            });
          }}
        >
          ADD HERO
        </button>
      </div>
      <ComponentA />
    </div>
  );
}

export default App;
