export default class CommandSharedCardSet {
  constructor(collection, newItem, oldItem) {
    this._collection = collection
    this._newItem = _.cloneDeep(newItem)
    this._oldItem = _.cloneDeep(oldItem)
  }

  async execute() {
    await this._collection.doc(this._newItem.id).set(this._newItem)
  }

  async undo() {
    await this._collection.doc(this._oldItem.id).set(this._oldItem)
  }
}
