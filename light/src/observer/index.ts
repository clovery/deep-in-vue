import { IDict } from '../vue.d'

function defineReactive(obj: object, key: string, val: any) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = val
      console.log(value)
    },
    set: function reactiveSetter(newVal) {
      console.log(newVal)
    }
  })
}

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
