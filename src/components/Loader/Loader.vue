<template>
  <div class="loader"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class Loader extends Vue {
}
</script>
<style lang="scss">
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #090c2d;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 40px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
