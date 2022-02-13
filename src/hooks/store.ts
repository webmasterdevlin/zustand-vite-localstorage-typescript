import create, { SetState } from "zustand";
import { configurePersist } from "zustand-persist";

const { persist } = configurePersist({
  storage: localStorage,
});

export type HeroModel = {
  id: string;
  firstName: string;
  lastName: string;
};

export type StoreType = {
  heroes: HeroModel[];
  isLoading: boolean;
  addNewHero: (hero: HeroModel) => void;
};

export const useStore = create(
  persist(
    {
      key: "root",
    },
    (set: SetState<any>, get) => ({
      isLoading: false,
      heroes: [] as HeroModel[],
      addNewHero: (hero: HeroModel) =>
        set((state: StoreType) => ({ heroes: [...state.heroes, hero] })),
    })
  )
);
