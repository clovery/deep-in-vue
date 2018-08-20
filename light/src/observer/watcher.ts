import Vue from '../vue'

class Watcher {
  private getter: () => string | string;

  constructor(vm: Vue, expOrFn: () => any | string, cb: () => any, options?: any) {
    // this.vm = vm
    this.getter = expOrFn
  } 

  public get() {
    // pushTarget(this)
    // const value = this.getter.call(this.vm, this.vm)
    // popTarget()
    // return value
  }
}

export default Watcher
