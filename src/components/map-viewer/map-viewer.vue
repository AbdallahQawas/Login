<template>
  <div class="relative p-1 bg-white rounded-b-md">
    <div style="height: 400px" id="mapContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import { onMounted, ref } from "vue";
import type { IMapLayer } from "@/services/map-service/map-types";

type propsType = {
  layers: IMapLayer[];
};

const props = defineProps<propsType>();

let map: mapboxgl.Map;

let layersIDs = ref<string[]>([]);

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGlzaGFtYWJkYWxmYXRhaDIyIiwiYSI6ImNsbzZ4bzg2NDAwaG8yaXFnZGphbDJseHYifQ.vQ4nhuHhmRQYYBnT16Jsgg";

function initMapBox() {
  map.on("load", () => {
    props.layers.forEach((layer) => {
      map.addSource(layer.source.id, layer.source.details);
      map.addLayer(layer.details);
    });
  });
}

function addProperties() {
  map.on("click", layersIDs.value, (e) => {
    const coordinates = e.features[0].geometry.coordinates;
    const description = e.features[0].properties;
    const keys = Object.keys(description);
    const values = Object.values(description);
    const properties = keys.map((key, index) => {
      return `<strong> ${key} : </strong> ${values[index]} </br>`;
    });
    const clearProperties = properties.reduce(
      (prev, current) => prev + current,
      "",
    );

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(clearProperties)
      .addTo(map);
  });

  map.on("mouseenter", layersIDs.value, () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", layersIDs.value, () => {
    map.getCanvas().style.cursor = "";
  });
}

function init() {
  let filterdIds = props.layers.filter(
    (layer) => layer.details.type === "circle",
  );
  layersIDs.value = filterdIds.map((layer) => layer.details.id);

  map = new mapboxgl.Map({
    container: "mapContainer",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [35.19360839560261, 32.51780590643118],
    zoom: 9,
  });

  initMapBox();
  addProperties();
}

onMounted(init);
</script>

<style scoped>
@import "https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css";
</style>
