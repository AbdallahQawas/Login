<template>
  <div class="relative p-1 bg-white m-4 rounded-md">
    <div style="height: 400px" id="mapContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import mapboxgl from 'mapbox-gl'
import { onMounted } from 'vue'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGlzaGFtYWJkYWxmYXRhaDIyIiwiYSI6ImNsbzZ4bzg2NDAwaG8yaXFnZGphbDJseHYifQ.vQ4nhuHhmRQYYBnT16Jsgg'

function init() {
  const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [35.19360839560261, 32.51780590643118],
    zoom: 14
  })
}

onMounted(init)
</script>

<style scoped>
@import 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css';
</style>
