<template lang="pug">
div
  div.shortcut-button(
    v-shortkey="{mac:['meta', 'z'],win:['ctrl', 'z']}"
    @shortkey="$emit('undo')")
  div.shortcut-button(
    v-shortkey="{mac:['meta', 'shift', 'z'],win:['ctrl', 'y']}"
    @shortkey="$emit('redo')")
</template>
<script></script>
<style scoped>
.shortcut-button {
  width: 0px;
  height: 0px;
}
</style>
