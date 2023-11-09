<template>
  <div class="mx-4 p-2 bg-white rounded-md">
    <div class="w-11/12 h-5/6" id="chartContainer"></div>
  </div>
</template>
<script lang="ts" setup>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

function init() {
  const ctx = document.getElementById('chartContainer')
  let newCanves = document.createElement('canvas')
  ctx?.appendChild(newCanves)

  if (ctx) {
    const chart = new Chart(newCanves, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'weekDays',
            data: [
              {
                x: 'sun',
                y: 1
              },
              {
                x: 'mon',
                y: 2
              },
              {
                x: 'tues',
                y: 3
              },
              {
                x: 'wed',
                y: 4
              }
            ],
            borderWidth: 1
          },
          {
            label: 'weekDays2',
            data: [
              {
                x: 'sun',
                y: 6
              },
              {
                x: 'mon',
                y: 7
              },
              {
                x: 'tues',
                y: 8
              },
              {
                x: 'wed',
                y: 9
              }
            ],
            borderWidth: 1
          }
        ]
      },
      options: {}
    })
  }
}

onMounted(init)
</script>
