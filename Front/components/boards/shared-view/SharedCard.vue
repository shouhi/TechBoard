<template lang="pug">
.shared-card(
  :id='`${item.id}`',
  :style='mainStyle',
  :class='isSelected ? "selected-shared-card" : ""',
  ref='sharedcard',
  @mousedown='onMouseDown'
)
  v-card(:color='item.cardColor', @dblclick='onDoubleClick', :flat='flat')
    div(style='float:right;')
      v-tooltip(right, max-width='200')
        template(v-slot:activator='{ on, attrs }')
          v-btn(
            icon,
            x-small,
            color='$const.colors.grey',
            v-show='show',
            v-bind='attrs',
            v-on='on'
          )
            v-icon(small) mdi-information-outline
        span 作成者：{{ createdBy }}
        br
        span.line-breaks(max-width='200') コメント：{{ this.memo }}

    .shared-card-text.pb-0(v-if='mode === "read"', :style='styleText')
      div(v-html='$sanitize($utils.nl2br(text))')
    textarea.shared-card-textarea(
      v-else,
      ref='textarea',
      v-model='text',
      @blur='onTextChanged',
      rows='5',
      :style='styleText',
      @wheel='onTextScroll'
    )

  v-btn(
    v-if='mode === "write"',
    color='primary',
    absolute,
    dark,
    fab,
    bottom,
    right,
    x-small,
    @click='onTextChanged'
  )
    v-icon mdi-check
</template>
<script>
export default {
  props: {
    boardInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    selectedItems: {
      type: Array,
      require: true,
      default: () => {
        return []
      },
    },
    item: {
      type: Object,
      require: true,
      default: () => {
        return {}
      },
    },
    transform: {
      type: Object,
      require: true,
      default: () => {
        return {}
      },
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mode: 'read',
      localText: undefined,
      memo: this.item.memo,
    }
  },
  computed: {
    x() {
      return (
        ((this.item.positionX || 0) + this.transform.x) * this.transform.scale
      )
    },
    y() {
      return (
        ((this.item.positionY || 0) + this.transform.y) * this.transform.scale
      )
    },
    z() {
      return this.item.positionZ || 0
    },

    scale() {
      return this.transform.scale
    },
    width() {
      return this.item.cardWidth !== undefined && this.item.cardWidth !== 'auto'
        ? (this.item.cardWidth * this.scale).toString() + 'px'
        : 'auto'
    },
    height() {
      return this.item.cardHeight !== undefined &&
        this.item.cardHeight !== 'auto'
        ? (this.item.cardHeight * this.scale).toString() + 'px'
        : 'auto'
    },
    fontSize() {
      return (
        (this.item.fontSize !== undefined ? this.item.fontSize : 1.5) *
        this.scale
      )
    },
    fontWeight() {
      return this.item.fontWeight ? this.item.fontWeight : 'normal'
    },
    fontColor() {
      return this.item.fontColor
        ? this.item.fontColor
        : this.$const.colors.defaultFontColor
    },
    margin() {
      return 0.5 * this.scale
    },
    padding() {
      return 1 * this.scale
    },
    styleText() {
      if (this.height === '0px') {
        return `min-height: ${this.transform.scale}rem; min-max: ${this.transform.scale}rem; \
        width: ${this.width}; font-size: ${this.fontSize}rem; \
        font-weight: ${this.fontWeight}; color: ${this.fontColor}; margin: ${this.margin}rem; \
        padding: ${this.padding}rem`
      } else {
        return `min-height: ${this.transform.scale}rem; min-max: ${this.transform.scale}rem; \
        height: ${this.height}; width: ${this.width}; font-size: ${this.fontSize}rem; \
        font-weight: ${this.fontWeight}; color: ${this.fontColor}; margin: ${this.margin}rem; \
        padding: ${this.padding}rem`
      }
    },
    mainStyle() {
      let ret = `transform:translate(${this.x}px,${this.y}px); position:absolute; z-index:${this.z};`
      if (this.isSelected) {
        ret += `outline: dotted ${this.$const.colors.cardSelectedRect} 2px`
      }
      return ret
    },
    flat() {
      return this.item.cardColor === this.$const.colors.transparent
    },
    text: {
      get() {
        if (this.localText !== undefined) {
          return this.localText
        } else {
          return this.item.text
        }
      },
      set(val) {
        this.localText = val
      },
    },
    show: {
      get() {
        if (this.item.cardColor === this.$const.colors.transparent) {
          return false
        } else {
          return true
        }
      },
    },
    createdBy() {
      const permission = this.boardInfo.permissions.find((permission) => {
        return permission.user_id === this.item.createdBy
      })
      if (permission) {
        return permission.user.name
      }
      return '不明'
    },
  },
  watch: {},
  mounted() {
    if (this.item.memo === undefined) {
      this.memo = 'なし'
    } else {
      this.memo = this.item.memo
    }
  },
  methods: {
    onMouseDown() {
      console.log(this.item)
      const item = _.cloneDeep(this.item)
      this.$emit('item-selected', item)
    },
    onDoubleClick() {
      if (this.mode === 'read') {
        this.mode = 'write'
        this.$emit('edit', true)
        this.$nextTick(() => {
          this.$refs.textarea.focus()
        })
      }
    },
    onTextScroll(e) {
      e.stopPropagation()
    },
    onTextChanged() {
      if (this.mode === 'write') {
        this.mode = 'read'
        this.$emit('edit', false)
        const item = _.cloneDeep(this.item)
        item.text = this.localText
        this.$emit('change', item)
        this.localText = undefined
      }
    },
  },
}
</script>
<style>
.shared-card-text {
  display: flex;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  overflow-wrap: break-word;
  justify-content: center;
  align-items: center;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
}
.shared-card-textarea {
  border: none;
  outline: none;
}
.horizontal-display {
  background-color: white;
  display: flex;
  text-align: center;
}
.selected-shared-card {
  position: absolute;
}
.line-breaks {
  /*半角文字の改行*/
  word-wrap: break-word;
}
.information-outline-positison {
  text-align: right;
}
</style>
