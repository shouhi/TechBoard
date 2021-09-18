<template lang="pug">
div
  v-container(class="grey lighten-5")
    v-row
      v-col(
        v-for='(item, i) in boards'
        cols="6",
        sm="4"
        md="3",
        lg="2"
        :key="i")
        v-hover(v-slot:default="{ hover }")
          v-card.cardStyle(
            
            :elevation="hover ? 16 : 2"
            outlined
            tile
            @click="selectBoard(item)"
            max-height='170px'
            max-width='170px'
          )
            h4.nameStyle {{item.name}}
            h5.datePosition 作成日時 {{item.created_at|moment}}
</template>
<script>
import utils from '~/libs/utils'
export default {
  filters: {
    moment(date) {
      return utils.dateToJapanese(date)
    },
  },
  props: {
    boards: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {},
  mounted() {},
  methods: {
    selectBoard(board) {
      this.$emit('select-board', board)
    },
  },
}
</script>

<style>
.cardStyle {
  height: 170px;
  width: 170px;
}
.datePosition {
  position: absolute;
  bottom: 0;
  font-size: 3px;
  text-align: center;
  opacity: 0.5;
}
.nameStyle {
  font-weight: bold;
}
</style>
