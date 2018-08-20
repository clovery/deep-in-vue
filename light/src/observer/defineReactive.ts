import Dep from './dep'

export default function defineReactive(obj: object, key: string, val: any) {
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = val
      return value
    },
    set: function reactiveSetter(newVal: any) {
      val = newVal
    }
  })
}
