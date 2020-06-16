<template>
  <div class="app">
    <h1>Test app that shows a list of all JavaScript repos on Github</h1>
    <h2>For Epicmax</h2>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  background: -webkit-linear-gradient(45deg, #2a14d0, #c80b30);
  h1 {
    color: white;
    font-size: 32px;
    margin: 20px;
  }
  h2 {
    color: white;
    font-size: 24px;
    margin: 10px;
  }
}
</style>
