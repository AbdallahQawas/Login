import { defineStore } from "pinia";
import type { DynamicFilterStateType } from "./dynamic-filter-types";

export const DynamicFilterService = defineStore("FilterService", {
  state: (): DynamicFilterStateType => ({
    label: "",
    disableFilter: false,
  }),
  actions: {
    async setLabel(text: string) {
      this.$state.label = text;
    },
    async setDisableFilter(item: boolean) {
      this.$state.disableFilter = item;
    },
  },
});
