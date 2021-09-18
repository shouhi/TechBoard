<template lang="pug">
div
  v-container
    v-row
      v-col
        div
          v-btn(
            @click='createBoardDialog = true',
            color='primary',
            dark,
            x-large
          ) 新規ボード作成
          create-board-dialog(
            v-model='createBoardDialog',
            @create-board='createBoard',
          )
          create-name-dialog(
            v-model='createNameDialog'
            @create-name='createName',
          )
        v-card.spacer(color='accent_white')
          v-card-title(small) 最近編集したボード
        v-card.spacer(color='accent_white')
          v-card-title あなたのボード
          boards-list(:boards="boards" @select-board='selectBoard')
</template>
<script>
import { mapGetters } from 'vuex'
import CreateBoardDialog from '~/components/dialog/CreateBoardDialog'
import CreateNameDialog from '~/components/dialog/CreateNameDialog'
import BoardsList from '~/components/dashboard/BoardsList'
import extensions from '~/mixins/extensions'

export default {
  components: {
    BoardsList,
    CreateBoardDialog,
    CreateNameDialog,
  },
  mixins: [extensions],
  layout: 'common-layout',
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    await store.dispatch('boards/fetchBoards')
    await store.dispatch('boards/fetchBoardAccesses')
    if (!store.getters['user/user']) {
      await store.dispatch('user/fetchMe')
    }
  },
  data() {
    return {
      createBoardDialog: false,
      createNameDialog: false,
    }
  },
  computed: {
    ...mapGetters({
      boards: 'boards/boards',
      user: 'user/user',
    }),
  },
  mounted() {
    if (this.user.name === '' || this.user.name === null) {
      this.createNameDialog = true
    }
  },
  methods: {
    async createBoard(info) {
      await this.actionWithLoadingSnackbar(async () => {
        const res = await this.$store.dispatch('boards/createBoard', {
          name: info.name,
          isApprovalRequired: info.isApprovalRequired,
        })
        this.createBoardDialog = false
        this.$router.push(`/boards/${res.id}?notice=新しいボードを作成しました`)
      })
    },
    selectBoard(board) {
      this.$router.push(`/boards/${board.id}`)
    },
    async createName(name) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$store.dispatch('user/updateMe', { name })
        this.createNameDialog = false
      }, '名前を入力しました')
    },
  },
}
</script>
<style>
.spacer {
  margin-top: 25px;
  margin-bottom: 50px;
}
.title-style {
  font-weight: bold;
}
</style>
