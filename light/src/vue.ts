import { IOptions, IDict } from './vue.d'

import proxy from './proxy'
import Observer from './observer'
import Watcher from './observer/watcher'

class Vue {
  // tslint:disable variable-name
  public _data!: IDict
  public _watcher!: Watcher

  constructor(options: IOptions) {
    if (options.data) {
      // tslint:disable: no-unused-expression
      new Observer(options.data)

      this._data = options.data
      Object.keys(options.data).forEach(key => {
        proxy(this, '_data', key)
      })
    }

    this.$mount()
  }

  private $mount() {
    const updateComponent = () => {
      // vm._update(vm._render(), hydrating);
    }

    this._watcher = new Watcher(this, updateComponent, () => {/* */})
  }
}

export default Vue
