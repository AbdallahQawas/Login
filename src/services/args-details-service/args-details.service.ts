import PageSettingsAPI from "@/api/PageSettingsAPI/PageSettingsAPI";
import type { ArgsDetailsClass } from "@/api/PageSettingsAPI/PageSettingsAPI.models";
import { defineStore } from "pinia";
import type { ArgsDetailsStateType } from "./args-details.types";

const pageSettingsAPI = PageSettingsAPI();

export const ArgsService = defineStore("ArgsDetails", {
  state: (): ArgsDetailsStateType => ({
    argsDetails: {} as ArgsDetailsClass,
  }),
  actions: {
    async loadArgsDetails() {
      const temp = await pageSettingsAPI.getSettingsAPI();
      this.$state.argsDetails = temp.data[0].args;
    },
  },
});
