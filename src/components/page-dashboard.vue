<template>
  <page-template>
    <template #content>
      <table-view :data="data" :labels="labels"> </table-view>
    </template>
  </page-template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import pageTemplate from './page-template.vue'
import tableView from './table-view/table-view.vue'
import { EdataType, type dataType } from './table-view/table-view.types'

let labels = ref<string[]>([])
let data = ref<dataType[][]>([])

function init() {
  labels.value = ['Time', 'Label', 'Value', 'Time', 'Label', 'Value']
  data.value = [
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test',
        type: EdataType.String
      },

      {
        value: '1',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ],
    [
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '2',
        type: EdataType.Number
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: '2023-10-29T12:21:36.951Z',
        type: EdataType.Date
      }
    ]
  ]
}

onMounted(init)
</script>
