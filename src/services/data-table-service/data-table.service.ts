import DataTableAPI from '@/api/DataTableAPI/DataTableAPI'
import { DataTableClass } from '@/api/DataTableAPI/DataTableAPI.models'
import type { dataTableStateType } from '@/api/DataTableAPI/DataTableAPI.types'
import { defineStore } from 'pinia'

const dataTableAPI = DataTableAPI()

export const useDataTableStore = defineStore('dataTable', {
  state: (): dataTableStateType => ({
    dataTable: {} as DataTableClass
  }),
  actions: {
    async loadDataTable() {
      const temp = await dataTableAPI.getDataTable()
      this.$state.dataTable = temp
    },
    getDataTable() {
      return this.$state.dataTable
    },
    async loadNextData() {
      const temp = await dataTableAPI.getDataTable()
      this.$state.dataTable.data = [...this.$state.dataTable.data, ...temp.data]
    }
  }
})
