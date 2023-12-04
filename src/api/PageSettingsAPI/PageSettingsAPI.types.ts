import type {
  CardDetailsClass,
  ChartDetailsClass,
} from "./PageSettingsAPI.models";

export type PSData = {
  charts: ChartDetailsClass[];
  cards: CardDetailsClass[];
};

export type CDArgsType = {
  label: string;
  value: number;
  icon_code: string;
};
