import "./App.css";

import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

import { useHeroStore } from "./hooks/heroStore";
import ComponentA from "./components/ComponentA";
import { useVillainStore } from "./hooks/villainStore";

function App() {
  const heroes = useHeroStore((state) => state.heroes);
  const addNewHero = useHeroStore((state) => state.addNewHero);
  const cleanHeroes = useHeroStore((state) => state.cleanHeroes);
  const villains = useVillainStore((state) => state.villains);
  const addNewVillains = useVillainStore((state) => state.addNewVillain);

  return (
    <div className="App">
      <div>
        {heroes.map((h) => (
          <div key={h.id}>{h.firstName}</div>
        ))}
      </div>
      <div>
        {villains?.map((v) => (
          <div key={v.id}>{v.firstName}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            addNewHero({
              id: uuidv4(),
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
            });
          }}
        >
          ADD HERO
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            cleanHeroes();
          }}
        >
          CLEAN
        </button>
      </div>
      <ComponentA />
    </div>
  );
}

export default App;
