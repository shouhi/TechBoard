<template>
  <v-app>
    <snackbar :snackbar="snackbar"></snackbar>
    <confirmation-dialog :confirmationDialog="confirmationDialog"></confirmation-dialog>
    <Nuxt></Nuxt>
  </v-app>
</template>

<script>
import Snackbar from "~/components/common/SnackBar";
import commonui from "~/mixins/common-ui";
import ConfirmationDialog from "~/components/common/ConfirmationDialog";

export default {
  components: {
    Snackbar,
    ConfirmationDialog,
  },
  mixins: [commonui],
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
