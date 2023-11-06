<template>
  <page-template>
    <template #content>
      <data-table v-if="!!data.length" :data="data" :labels="labels"></data-table>
      <map-viewer></map-viewer>
    </template>
  </page-template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import pageTemplate from './page-template.vue'
import { EdataType, type dataType } from './table-view/table-view.types'
import dataTable from '@/components/data-table/data-table.vue'
import mapViewer from '@/components/map-viewer/map-viewer.vue'

let labels = ref<string[]>([])
let data = ref<dataType[][]>([])

function init() {
  labels.value = ['Time', 'Label', 'Value', 'Time', 'Label', 'Value']
  data.value = [
    [
      {
        value: '2023-10-1T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test0',
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
        value: '2023-10-4T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test1',
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
        value: '2023-10-2T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '3',
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
        value: 'test4',
        type: EdataType.String
      },

      {
        value: '4',
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
        value: 'test3',
        type: EdataType.String
      },

      {
        value: '5',
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
        value: 'test6',
        type: EdataType.String
      },

      {
        value: '6',
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
        value: '2023-10-1T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test0',
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
        value: '2023-10-4T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test1',
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
        value: '2023-10-2T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '3',
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
        value: 'test4',
        type: EdataType.String
      },

      {
        value: '4',
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
        value: 'test3',
        type: EdataType.String
      },

      {
        value: '5',
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
        value: 'test6',
        type: EdataType.String
      },

      {
        value: '6',
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
        value: 'test5',
        type: EdataType.String
      },

      {
        value: '7',
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
        value: 'test9',
        type: EdataType.String
      },

      {
        value: '8',
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
        value: 'test7',
        type: EdataType.String
      },

      {
        value: '9',
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
        value: 'test8',
        type: EdataType.String
      },

      {
        value: '10',
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
        value: '2023-10-1T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test0',
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
        value: '2023-10-4T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test1',
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
        value: '2023-10-2T12:21:36.951Z',
        type: EdataType.Date
      },
      {
        value: 'test2',
        type: EdataType.String
      },

      {
        value: '3',
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
        value: 'test4',
        type: EdataType.String
      },

      {
        value: '4',
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
        value: 'test3',
        type: EdataType.String
      },

      {
        value: '5',
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
        value: 'test6',
        type: EdataType.String
      },

      {
        value: '6',
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
        value: 'test5',
        type: EdataType.String
      },

      {
        value: '7',
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
        value: 'test9',
        type: EdataType.String
      },

      {
        value: '8',
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
        value: 'test7',
        type: EdataType.String
      },

      {
        value: '9',
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
        value: 'test8',
        type: EdataType.String
      },

      {
        value: '10',
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
