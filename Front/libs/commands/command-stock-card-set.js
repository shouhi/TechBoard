import Vue from 'vue'
export default class CommandStockCardSet {
  constructor(stockItems, newItem, oldItem) {
    this._stockItems = stockItems
    this._newItem = _.cloneDeep(newItem)
    this._oldItem = _.cloneDeep(oldItem)
    this._index = this._stockItems.indexOf(oldItem)
  }

  execute() {
    const index = this._stockItems.findIndex(
      (item) => item.id === this._newItem.id
    )
    if (index >= 0) {
      Vue.set(this._stockItems, index, this._newItem)
    }
  }

  undo() {
    Vue.set(this._stockItems, this._index, this._oldItem)
  }
}
