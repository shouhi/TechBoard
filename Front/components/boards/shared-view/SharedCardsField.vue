<template lang="pug">
v-row.full-height(
  justify='space-around',
  align='center',
  ref='sharedcardfield'
)
  shared-card(
    v-for='(item, i) in sharedItems',
    :key='i',
    :item='item',
    :transform='transform',
    :isSelected='isSelectedItemId(item.id)',
    @change='onItemChanged',
    @item-selected='onItemSelected',
    @edit='editCard',
    :boardInfo='boardInfo'
  )
</template>
<script>
import Moveable from 'moveable'
import Selecto from 'selecto'
import SharedCard from '~/components/boards/shared-view/SharedCard'
export default {
  components: {
    SharedCard,
  },
  props: {
    boardInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    sharedItems: {
      type: Array,
      require: true,
      default: () => [],
    },
    transform: {
      type: Object,
      require: true,
      default: () => {
        return { x: 0.0, y: 0.0, scale: 1.0 }
      },
    },
    selectedItems: {
      type: Array,
      require: true,
      default: () => {
        return []
      },
    },
    mode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      moveable: undefined,
      selecto: undefined,
    }
  },
  computed: {},
  watch: {
    mode(newMode, oldMode) {
      if (newMode !== 'select') {
        this.unselected()
      }
    },
    sharedItems() {
      this.updateSelectRect()
    },
    selectedItems() {
      this.updateSelectRect()
    },
    transform() {
      this.updateSelectRect()
    },
  },
  mounted() {
    this.moveable = new Moveable(this.$refs.sharedcardfield, {
      draggable: true,
    })
    this.moveable
      .on('dragStart', (e) => {})
      .on('dragGroup', ({ targets, events }) => {
        events.forEach(({ target, transform }, i) => {
          target.style.transform = transform
        })
      })
      .on('dragEnd', ({ target, lastEvent }) => {
        if (lastEvent) {
          this.moveItems([target], lastEvent.dist)
        }
        // シェアカードメニューがカードの移動後でも移動前の位置に一瞬表示されるのを防ぐ
        // カード移動時にデータがfirestoreに送られて表示されるまでの時間差分、emitする時間を遅らせたいため一旦0.1秒setTimeoutかけてます
        setTimeout(() => {
          this.$emit('drag', false)
        }, 100)
      })
      .on('dragGroupEnd', ({ targets, isDrag, lastEvent }) => {
        if (lastEvent) {
          this.moveItems(targets, lastEvent.dist)
        }
        setTimeout(() => {
          this.$emit('drag', false)
        }, 100)
      })
      .on('drag', (e) => {
        const target = e.target
        target.style.transform = e.transform
        this.$emit('drag', true)
      })
      .on('dragGroup', ({ targets, events }) => {
        events.forEach(({ target, transform }, i) => {
          target.style.transform = transform
        })
        this.$emit('drag', true)
      })
    this.selecto = new Selecto({
      container: this.$refs.sharedcardfield,
      selectableTargets: ['.shared-card'],
      selectByClick: true,
      selectFromInside: false,
      continueSelect: false,
      toggleContinueSelect: 'shift',
      keyContainer: window,
      hitRate: 0,
    })
    this.selecto
      .on('select', (e) => {
        const selectedItems = []
        e.selected.forEach((el) => {
          const id = el.id
          selectedItems.push(id)
        })
        const targets = selectedItems.map((id) => document.getElementById(id))
        this.moveable.target = targets
        this.$emit('selected-changed', selectedItems)
        this.showMenu = false
        this.$nextTick(() => {
          this.showMenu = this.selectedItems.length > 0
        })
      })
      .on('dragStart', (e) => {
        if (this.mode === 'drag') {
          e.stop()
        }
        const target = e.inputEvent.target
        const targets = this.selectedItems.map((id) =>
          document.getElementById(id)
        )
        const stockView = document.getElementById('stock-view')
        if (
          this.moveable.isMoveableElement(target) ||
          stockView.contains(target) ||
          targets.some((t) => t === target || t.contains(target))
        ) {
          e.stop()
        }
      })
      .on('selectEnd', (e) => {
        const selectedItems = []
        const targets = []
        e.selected.forEach((el) => {
          this.sharedItems.forEach((item) => {
            const iel = document.getElementById(item.id)
            if (iel && iel.contains(el)) {
              selectedItems.push(item.id)
              targets.push(iel)
            }
          })
        })
        this.moveable.target = targets
        if (e.isDragStart) {
          e.inputEvent.preventDefault()
          setTimeout(() => {
            this.moveable.dragStart(e.inputEvent)
          })
        }
      })
  },
  methods: {
    onItemSelected(item) {
      let ret = 0
      for (let i = 0; i < this.sharedItems.length; i++) {
        const z = this.sharedItems[i].positionZ
        if (z && ret < z) {
          ret = z
        }
      }
      item.positionZ = ret + 1
      this.onItemChanged(item)
    },
    onItemChanged(item) {
      this.$emit('change-one-item', item)
    },

    moveItems(targets, dist) {
      const newItems = []
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i]
        const item = this.sharedItems.find((item) => item.id === target.id)
        if (item && dist) {
          const x = item.positionX + dist[0] / this.transform.scale
          const y = item.positionY + dist[1] / this.transform.scale
          newItems.push(
            _.merge({ id: item.id }, { positionX: x, positionY: y })
          )
        }
      }
      this.$emit('items-changed', newItems)
    },

    isSelectedItemId(id) {
      return this.selectedItems.includes(id)
    },
    updateSelectRect() {
      if (this.selectedItems.length === 0) {
        this.selecto.setSelectedTargets([])
        this.moveable.target = []
      }
      this.moveable.updateRect()
    },
    unselected() {
      this.selecto.setSelectedTargets([])
      this.moveable.target = []
      this.$emit('selected-changed', [])
    },
    editCard(edit) {
      this.$emit('edit-card', edit)
    },
  },
}
</script>
<style>
.full-height {
  height: 100%;
  max-height: 100%;
}
.moveable-control.moveable-origin {
  display: none;
}
.moveable-line {
  background: #ffffff00 !important;
}
.grabbing-cursor {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  cursor: grabbing;
  height: 100%;
  max-height: 100%;
}
.hand-cursor {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  cursor: grab;
  height: 100%;
  max-height: 100%;
}
</style>
