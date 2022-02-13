import create, { SetState } from "zustand";

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
      heroes: [] as HeroModel[],
      addNewHero: (hero: HeroModel) =>
        set((state: HeroStoreType) => ({ heroes: [...state.heroes, hero] })),
      cleanHeroes: () =>
        set(() => {
          purge()
            .then()
            .catch((e) => console.log(e));
          return { heroes: [] };
        }),
    })
  )
);

mountStoreDevtool("heroStore", useHeroStore as any);
