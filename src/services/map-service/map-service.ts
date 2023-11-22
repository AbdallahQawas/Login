import layer1 from "@/geojson/Leak_Hotspot_Merged_March02_WGS1984_V2.json";
import layer2 from "@/geojson/PipesLayout_WGS1984_V3.json";
import layer3 from "@/geojson/Pressure_Meters_and_flow_meters_1PJpiBN.json";
import layer4 from "@/geojson/Water_Pipes_Jan24_WGS1984_V2.json";
import type { IMapLayer } from "./map-types";

function MapService() {
  function getMapLayers() {
    const layersArr = [
      { type: "circle", layer: layer1 },
      { type: "line", layer: layer2 },
      { type: "polygon", layer: layer3 },
      { type: "line", layer: layer4 },
    ];
    const tempLayers: IMapLayer[] = layersArr.map((layer, index) => {
      if (layer.type === "circle") {
        return {
          source: {
            id: "layer" + index,
            details: {
              type: "geojson",
              data: layer.layer,
            },
          },
          details: {
            id: "layer" + index + "-layer",
            type: "circle",
            source: "layer" + index,
            paint: {
              "circle-radius": 6,
              "circle-color": [
                "match",
                ["get", "color"],
                "red",
                "#FF0000",
                "blue",
                "#0000FF",
                "#008000",
              ],
            },
            filter: ["==", "$type", "Point"],
          },
        };
      } else if (layer.type === "polygon") {
        return {
          source: {
            id: "layer" + index,
            details: {
              type: "geojson",
              data: layer.layer,
            },
          },
          details: {
            id: "layer" + index + "-layer",
            type: "fill",
            source: "layer" + index,
            paint: {
              "fill-color": [
                "match",
                ["get", "color"],
                "red",
                "#FF0000",
                "blue",
                "#0000FF",
                "#008000",
              ],
              "fill-opacity": 0.5,
            },
          },
        };
      }
      return {
        source: {
          id: "layer" + index,
          details: {
            type: "geojson",
            data: layer.layer,
          },
        },
        details: {
          id: "layer" + index + "-layer",
          type: "line",
          source: "layer" + index,
        },
      };
    });
    return tempLayers;
  }

  return { getMapLayers };
}

export default MapService;
