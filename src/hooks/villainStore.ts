import create from "zustand";

import { configurePersist } from "zustand-persist";
import { mountStoreDevtool } from "simple-zustand-devtools";
import produce, { Draft } from "immer";
import { WritableDraft } from "immer/dist/types/types-external";

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

export const useVillainStore = create<VillainStoreType>(
  persist(
    {
      key: "villainStore",
    },
    (set): VillainStoreType => ({
      isLoading: false,
      villains: [],
      addNewVillain: (villain: VillainModel) =>
        set(
          produce((draft: Draft<VillainStoreType>) => {
            draft.villains.push(villain);
          })
        ),
    })
  )
);

mountStoreDevtool("villainStore", useVillainStore as any);
