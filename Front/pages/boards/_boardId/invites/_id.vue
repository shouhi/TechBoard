<template lang="pug">
div.full-height
  v-row.full-height(justify="center" align-content="center")
    template(v-if="isError")
      span().text-h5 {{$utils.errorMessage(error)}}
    template(v-else)
      v-card(min-width="300")
        v-card-text
          span.text-subtitle-1 管理者の承認待ちです

        v-card-actions
          v-row(justify="center" align-content="center")
            v-btn(text @click="onRetry") 再試行
              v-icon(right) mdi-refresh

</template>

<script>
import env from '~/libs/environment'
import Const from '~/libs/const'
import extensions from '~/mixins/extensions'
import utils from '~/libs/utils'

async function checkAndRedirect(route, axios, redirectFunc) {
  // 自分のパーミッションを作成&取得
  const permission = await axios.$post(
    env.makeApiUrl(`/boards/${route.params.boardId}/permissions`),
    {
      inviteId: route.params.id,
      token: route.query.token,
    }
  )
  // 参加中だったらリダイレクトする
  if (permission && permission.state === Const.PERMISSION_STATE_JOIN) {
    redirectFunc(`/boards/${route.params.boardId}`)
  }
  return permission
}

export default {
  components: {},
  mixins: [extensions],
  async asyncData({ route, $axios, redirect }) {
    const user = await utils.getUser()
    if (!user) {
      redirect('instant-login')
    }
    try {
      // tokenとURLのチェック
      const invite = await $axios.$get(
        env.makeApiUrl(
          `/boards/${route.params.boardId}/invites/${route.params.id}?token=${route.query.token}`
        )
      )
      // パーミッションを取得&確認してOKなら
      const permission = await checkAndRedirect(route, $axios, (path) => {
        redirect(path)
      })
      return { invite, permission, isError: false }
    } catch (e) {
      return { error: e, isError: true }
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    async onRetry() {
      await this.actionWithLoadingSnackbar(async () => {
        await checkAndRedirect(this.$route, this.$axios, (path) => {
          this.$router.push(path)
        })
      })
    },
  },
}
</script>
