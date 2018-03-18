with(this) {
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_v("\n  " + _s(message) + "\n  "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (message),
      expression: "message"
    }],
    domProps: {
      "value": (message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) return;
        message = $event.target.value
      }
    }
  })])
}