<template>
  <v-app>
    <snackbar :snackbar="snackbar"></snackbar>
    <confirmation-dialog :confirmationDialog="confirmationDialog"></confirmation-dialog>
    <app-bar @link-to="linkTo" @logout="logout"></app-bar>
    <v-main>
      <Nuxt></Nuxt>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "~/components/layouts/AppBar";
import Snackbar from "~/components/common/SnackBar";
import ConfirmationDialog from "~/components/common/ConfirmationDialog";
import commonui from "~/mixins/common-ui";
import extensions from "~/mixins/extensions";

export default {
  components: {
    AppBar,
    Snackbar,
    ConfirmationDialog,
  },
  mixins: [commonui, extensions],
  data() {
    return {};
  },
  methods: {},
};
</script>
