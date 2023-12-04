import PageSettingsAPI from "@/api/PageSettingsAPI/PageSettingsAPI";
import { defineStore } from "pinia";
import type { ChartDetailsStateType } from "./chart-details.types";
import type { ChartDetailsClass } from "@/api/PageSettingsAPI/PageSettingsAPI.models";

const pageSettingsAPI = PageSettingsAPI();

export const ChartService = defineStore("chartDetails", {
  state: (): ChartDetailsStateType => ({
    chartDetails: [] as ChartDetailsClass[],
  }),
  actions: {
    async loadChartDetails() {
      const temp = await pageSettingsAPI.getSettingsAPI();
      this.$state.chartDetails = temp.data[0].charts;
    },
  },
});
