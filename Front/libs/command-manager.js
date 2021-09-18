class CommandManager {
  _commands = []
  _cursor = 0
  addCommand(command) {
    this._commands = this._commands.slice(0, this._cursor)
    this._commands.push(command)
    this._cursor++
    command.execute()
  }

  redo() {
    if (this._commands.length > this._cursor) {
      this._commands[this._cursor].execute()
      this._cursor++
    }
  }

  undo() {
    if (this._cursor > 0) {
      this._cursor--
      this._commands[this._cursor].undo()
    }
  }
}

export default new CommandManager()
