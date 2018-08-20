export interface IDict {
  [key: string]: any;
}

interface IOptions {
  el?: string | Element
  data?: () => IDict | IDict
}
