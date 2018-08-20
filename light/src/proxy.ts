export default function proxy(target: object, sourceKey: string, key: string) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      return this[sourceKey][key]
    },
    set(val: any) {
      this[sourceKey][key] =  val
    }
  })
}
