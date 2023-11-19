import { AnySourceData, AnyLayer } from "mapbox-gl";

export interface IMapLayer {
  source: {
    id: string;
    details: AnySourceData;
  };

  details: AnyLayer;
}
