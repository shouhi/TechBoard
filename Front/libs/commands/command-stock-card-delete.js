export default class CommandStockCardDelete {
  constructor(target, item) {
    this._item = _.cloneDeep(item)
    this._target = target
    this._index = this._target.indexOf(item)
  }

  execute() {
    const index = this._target.findIndex((item) => item.id === this._item.id)
    if (index >= 0) {
      this._target.splice(index, 1)
    }
  }

  undo() {
    this._target.splice(this._index, 0, this._item)
  }
}
