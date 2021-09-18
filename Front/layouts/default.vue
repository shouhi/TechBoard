<template lang="pug">
  v-app
    snackbar(:snackbar="snackbar")
    confirmation-dialog(:confirmationDialog="confirmationDialog")
    app-bar(@link-to="linkTo" @logout="logout")
    v-main
      Nuxt
    test-snackbar
</template>

<script>
import AppBar from "~/components/layouts/AppBar";
import Snackbar from "~/components/common/SnackBar";
import commonui from "~/mixins/common-ui";
import ConfirmationDialog from "~/components/common/ConfirmationDialog";

export default {
  components: {
    AppBar,
    Snackbar,
    ConfirmationDialog,
  },
  mixins: [commonui],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
