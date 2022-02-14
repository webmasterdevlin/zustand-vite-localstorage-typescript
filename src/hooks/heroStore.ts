import create from "zustand";
import produce, { Draft } from "immer";
import { configurePersist } from "zustand-persist";
import { mountStoreDevtool } from "simple-zustand-devtools";

const { persist, purge } = configurePersist({
  storage: localStorage,
});

export type HeroModel = {
  id: string;
  firstName: string;
  lastName: string;
};

export type HeroStoreType = {
  heroes: HeroModel[];
  isLoading: boolean;
  addNewHero: (hero: HeroModel) => void;
  cleanHeroes: () => void;
};

export const useHeroStore = create<HeroStoreType>(
  persist(
    {
      key: "heroStore",
    },
    (set): HeroStoreType => ({
      isLoading: false,
      heroes: [],
      addNewHero: (hero: HeroModel) =>
        set(
          produce((draft: Draft<HeroStoreType>) => {
            draft.heroes.push(hero);
          })
        ),
      cleanHeroes: () =>
        set(
          produce((draft: Draft<HeroStoreType>) => {
            purge()
              .then()
              .catch((e) => console.log(e));
            draft.heroes = [];
          })
        ),
    })
  )
);

mountStoreDevtool("heroStore", useHeroStore as any);
