<template>
  <div class="observer"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class Observer extends Vue {

  observer: IntersectionObserver | null = null

  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      }
    })
    this.observer.observe(this.$el)
  }

  destroyed () {
    if (this.observer) this.observer.disconnect()
  }
}
</script>
