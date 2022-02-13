import { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeroModel, HeroStoreType, useHeroStore } from "./hooks/heroStore";
import ComponentA from "./components/ComponentA";
import { useVillainStore, VillainStoreType } from "./hooks/villainStore";

function App() {
  // best practice
  // const heroes = useStore((state: StoreType) => state.heroes);
  // const addNewHero = useStore((state: StoreType) => state.addNewHero);
  const { addNewHero, heroes }: HeroStoreType = useHeroStore();
  const { villains, addNewVillain }: VillainStoreType = useVillainStore();

  return (
    <div className="App">
      <div>
        {/* hero was HeroModel, but became type 'any' after adding zustand persist */}
        {heroes.map((hero, i) => (
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
