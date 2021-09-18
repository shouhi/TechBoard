import CommandManager from '~/libs/command-manager'

export default {
  components: {},
  model: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    addCommand(command) {
      CommandManager.addCommand(command)
    },
    undo() {
      CommandManager.undo()
    },
    redo() {
      CommandManager.redo()
    },
  },
}
