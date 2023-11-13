import DataTableAPI from '@/api/DataTableAPI/DataTableAPI'
import type { dataTableStateType } from '@/api/DataTableAPI/DataTableAPI.types'
import type { dataType } from '@/components/table-view/table-view.types'
import { defineStore } from 'pinia'

const dataTableAPI = DataTableAPI()

export const useDataTableStore = defineStore('dataTable', {
  state: (): dataTableStateType => ({
    dataTable: [] as dataType[][]
  }),
  actions: {
    async loadDataTable() {
      const temp = await dataTableAPI.getDataTable()
      this.$state.dataTable = temp.data
    },
    getDataTable() {
      return this.$state.dataTable
    },
    async loadNextData() {
      const temp = await dataTableAPI.getDataTable()
      this.$state.dataTable = [...this.$state.dataTable, ...temp.data]
    }
  }
})
