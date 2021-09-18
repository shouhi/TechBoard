export default class CommandSample {
  constructor(target, text) {
    this._text = text
    this._target = target
  }

  execute() {
    this._target.push(this._text)
  }

  undo() {
    const index = this._target.findIndex((text) => this._text === text)
    if (index >= 0) {
      this._target.splice(index, 1)
    }
  }
}
