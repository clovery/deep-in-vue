import { IDict } from '../vue.d'
import defineReactive from './defineReactive'

class Observer {
  constructor(value: any) {
    this.walk(value)
  }

  private walk(obj: IDict) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

export default Observer
