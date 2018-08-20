import Vue from '../src/vue'

describe('test vue', () => {
  it('instance', () => {
    const root = document.createElement('div')
    const app = new Vue({
      el: root,
      data: {
        hola: 'hello'
      }
    })
    app.data.hola = 'hllll'
    expect(app).toBeInstanceOf(Vue)
  })
})
