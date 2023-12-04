import type { CDArgsType, PSData } from "./PageSettingsAPI.types";

export interface IPageSettings {
  data: PSData[];
}

export class PageSettingsClass implements IPageSettings {
  data = [] as PSData[];

  setData(data: IPageSettings): PageSettingsClass {
    return Object.assign(this, this.copy(data));
  }
  copy(original: IPageSettings): PageSettingsClass {
    const tempOriginal = original || this;
    const newClass = new PageSettingsClass();
    return Object.assign(newClass, { ...tempOriginal });
  }
}

export interface IChartDetails {
  id: number;
  label: string;
  chart_type: string;
}

export class ChartDetailsClass implements IChartDetails {
  id = -1;
  label = "";
  chart_type = "";

  setData(data: IChartDetails): ChartDetailsClass {
    return Object.assign(this, this.copy(data));
  }
  copy(original: IChartDetails): ChartDetailsClass {
    const tempOriginal = original || this;
    const newClass = new ChartDetailsClass();
    return Object.assign(newClass, { ...tempOriginal });
  }
}

export interface ICardDetails {
  id: number;
  label: string;
  code: string;
  args: CDArgsType;
}

export class CardDetailsClass implements ICardDetails {
  id = -1;
  label = "";
  code = "";
  args = {} as CDArgsType;

  setData(data: ICardDetails): CardDetailsClass {
    return Object.assign(this, this.copy(data));
  }
  copy(original: ICardDetails): CardDetailsClass {
    const tempOriginal = original || this;
    const newClass = new CardDetailsClass();
    return Object.assign(newClass, { ...tempOriginal });
  }
}
