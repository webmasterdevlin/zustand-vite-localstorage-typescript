import create, { SetState } from "zustand";

import { configurePersist } from "zustand-persist";
import { mountStoreDevtool } from "simple-zustand-devtools";

const { persist } = configurePersist({
  storage: localStorage,
});

export type VillainModel = {
  id: string;
  firstName: string;
  lastName: string;
};

export type VillainStoreType = {
  villains: VillainModel[];
  isLoading: boolean;
  addNewVillain: (villain: VillainModel) => void;
};

export const useVillainStore = create(
  persist(
    {
      key: "villainStore",
    },
    (set: SetState<any>, get) => ({
      isLoading: false,
      villains: [] as VillainModel[],
      addNewVillain: (villain: VillainModel) =>
        set((state: VillainStoreType) => ({
          villains: [...state.villains, villain],
        })),
    })
  )
);

mountStoreDevtool("villainStore", useVillainStore);
