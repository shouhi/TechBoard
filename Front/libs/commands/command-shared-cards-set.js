export default class CommandSharedCardsSet {
  constructor(collection, newItems, oldItems) {
    this._collection = collection
    this._newItems = _.cloneDeep(newItems)
    this._oldItems = _.cloneDeep(oldItems)
  }

  execute() {
    for (let i = 0; i < this._newItems.length; i++) {
      const item = this._newItems[i]
      this._collection.doc(item.id).update(item)
    }
  }

  undo() {
    for (let i = 0; i < this._oldItems.length; i++) {
      const item = this._oldItems[i]
      this._collection.doc(item.id).update(item)
    }
  }
}
