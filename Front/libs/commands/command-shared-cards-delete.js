export default class CommandSharedCardsDelete {
  constructor(collection, items) {
    this._collection = collection
    this._items = _.cloneDeep(items)
  }

  execute() {
    for (let i = 0; i < this._items.length; i++) {
      this._collection.doc(this._items[i].id).delete()
    }
  }

  undo() {
    for (let i = 0; i < this._items.length; i++) {
      this._collection.doc(this._items[i].id).set(this._items[i])
    }
  }
}
