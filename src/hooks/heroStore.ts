import create, { SetState } from "zustand";

import { configurePersist } from "zustand-persist";
import { mountStoreDevtool } from "simple-zustand-devtools";

const { persist } = configurePersist({
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
};

export const useHeroStore = create(
  persist(
    {
      key: "heroStore",
    },
    (set: SetState<any>, get) => ({
      isLoading: false,
      heroes: [] as HeroModel[],
      addNewHero: (hero: HeroModel) =>
        set((state: HeroStoreType) => ({ heroes: [...state.heroes, hero] })),
    })
  )
);

mountStoreDevtool("heroStore", useHeroStore);
