<template lang="pug">
div
  v-card
    v-card-title 招待(再送)
    v-card-text
      v-combobox(
        v-model='email',
        hide-selected,
        label='メールアドレスを入力してください',
        multiple,
        outlined,
        small-chips,
        append-icon=''
      )
      v-layout
        v-radio-group(v-model='role', row)
          v-radio(
            v-for='(role, i) in roles',
            :key='i',
            :label='`${$const.ROLE_TO_NAME(role)}`',
            :value='role'
          )
    v-card-actions
      v-spacer
      v-btn(
        medium,
        color='blue darken-1',
        dark,
        @click='inviteToPublicBoard'
        class="white--text font-weight-bold"
      ) 招待
      v-btn(color='blue darken-1', text, @click='done' class="font-weight-bold") 閉じる
</template>
<script>
import { mapGetters } from 'vuex'

import Const from '~/libs/const'
export default {
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    boardInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      email: [],
      role: Const.ROLE_VIEWER,
      message: '',

      roles: [Const.ROLE_VIEWER, Const.ROLE_EDITOR, Const.ROLE_ADMIN],
    }
  },
  computed: {
    ownRole() {
      const ownInvite = this.boardInfo.public_board_invites.find(
        (iv) => iv.invite_user_id === this.firebaseUid
      )
      return ownInvite ? ownInvite.role : 0
    },
    isInvitable() {
      return this.ownRole === this.$const.ROLE_ADMIN
    },
    ...mapGetters({
      firebaseUid: 'user/firebaseUid',
    }),
  },
  mounted() {},
  methods: {
    inviteToPublicBoard() {
      this.$emit(
        'invite-to-public-board',
        {
          email: this.email,
          role: this.role,
        },
        (this.email = [])
      )
    },
    done() {
      this.$emit('done')
    },
  },
}
</script>
<style scoped>
.status-td {
  width: 20%;
}
</style>
