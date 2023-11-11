import type { dataType } from '@/components/table-view/table-view.types'

export interface IDataTableAPI {
  data: dataType[][]
}

export class DataTableClass implements IDataTableAPI {
  data = [] as dataType[][]
  setData(data: dataType[][]): DataTableClass {
    this.data = data
    return this
  }
  copy(original: IDataTableAPI): DataTableClass {
    const tempOriginal = original || this
    const newClass = new DataTableClass()
    return Object.assign(newClass, { ...tempOriginal })
  }
}
