import { IOptions } from './vue.d'

import Observer from './observer'

class Vue {
  constructor(options: IOptions) {
    if (options.data) {
      // tslint:disable: no-unused-expression
      new Observer(options.data)
    }
  }
}

/*
const noop = () => { // noop }

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}
function proxy(target: object, sourceKey: any, key: string) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val: string) {
    this[sourceKey][key] = val;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
*/

export default Vue
