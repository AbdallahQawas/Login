export type dataType = {
  value: string
  type: EdataType
}

export enum EdataType {
  String = 'String',
  Number = 'Number',
  Date = 'Date',
  Boolean = 'Boolean'
}
