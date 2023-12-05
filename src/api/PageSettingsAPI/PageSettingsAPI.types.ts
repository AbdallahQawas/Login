import type {
  ArgsDetailsClass,
  CardDetailsClass,
  ChartDetailsClass,
} from "./PageSettingsAPI.models";

export type PSData = {
  charts: ChartDetailsClass[];
  cards: CardDetailsClass[];
  args: ArgsDetailsClass;
};

export type CDArgsType = {
  label: string;
  value: number;
  icon_code: string;
};

export type DynamicFilterArgs = {
  show: boolean;
  enable: boolean;
  filters: DynamicFiltersType[];
};

export type DynamicFiltersType = {
  label: string;
  code: DFCodeType;
  args: DFArgsType;
};

export type DFArgsType = {
  default_value: string;
  target_type: string;
  target_category: string;
};

export enum DFCodeType {
  label_filter = "label_filter",
  period_filter = "period_filter",
}
