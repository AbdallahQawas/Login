import PageSettingsAPI from "@/api/PageSettingsAPI/PageSettingsAPI";
import { defineStore } from "pinia";
import type { CardDetailsClass } from "@/api/PageSettingsAPI/PageSettingsAPI.models";
import type { CardDetailsStateType } from "./card-details.types";

const pageSettingsAPI = PageSettingsAPI();

export const CardService = defineStore("cardDetails", {
  state: (): CardDetailsStateType => ({
    cardDetails: [] as CardDetailsClass[],
  }),
  actions: {
    async loadCardDetails() {
      const temp = await pageSettingsAPI.getSettingsAPI();
      this.$state.cardDetails = temp.data[0].cards;
    },
  },
});
