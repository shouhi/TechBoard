<template lang="pug">
v-row(justify='center')
  v-dialog(v-model='dialog', persistent, max-width='500px')
    v-card
      v-card-title
        span.headline(class="font-weight-bold") カードサイズ変更
      v-card-text
        v-container
          v-row
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardSize($const.cardSize.squareLarge)',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 正方形:大
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardSize($const.cardSize.squareMedium)',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 正方形:中
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardSize($const.cardSize.squareSmall)',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 正方形:小
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardSize($const.cardSize.rectangleLarge)',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 長方形:大
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardSize($const.cardSize.rectangleMedium)',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 長方形:中
            v-col(cols='12', sm='5')
              v-btn(
                @click='cardSize($const.cardSize.rectangleSmall)',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 長方形:小
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardWidth = null',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 幅:自動
            v-col(cols='12', sm='6')
              v-btn(
                @click='cardHeight = null',
                x-large,
                color='blue darken-1',
                dark
                class="font-weight-bold"
              ) 高さ:自動
            v-col(cols='12', sm='5')
              v-text-field(
                v-model='cardWidth',
                label='幅',
                placeholder='自動',
                outlined
              )
            v-col(cols='12', sm='5')
              v-text-field(
                v-model='cardHeight',
                label='高さ',
                placeholder='自動',
                outlined
              )
      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', @click='save()' class="white--text font-weight-bold") 保存
        v-btn(color='blue darken-1', text, @click='dialog = false' class="font-weight-bold") 閉じる
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      cardWidth: null,
      cardHeight: null,
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  mounted() {
    this.cardWidth = this.item.cardWidth
    this.cardHeight = this.item.cardHeight
  },
  methods: {
    cardSize(size) {
      this.cardWidth = size.width
      this.cardHeight = size.height
    },
    save() {
      this.$emit('card-size', {
        cardWidth: this.cardWidth,
        cardHeight: this.cardHeight,
      })
      this.dialog = false
    },
  },
}
</script>
