<template>
  <div class="table-wrapper">
    <table v-if="rows.length">
      <thead>
      <tr>
        <th
          v-for="(column, i) in columns" :key="i"
        >
          {{$t(column)}}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr
        v-for="(row, i) in rows"
        :key="i"
      >
        <td
          v-for="(value, i) in row.table_values" :key="i"
        >
          <a v-if="value.toString().startsWith('http')" :href="value" target="_blank">
            {{value}}
          </a>
          <div v-else>
            {{value}}
          </div>
        </td>
      </tr>
      </tbody>
      <observer @intersect="$emit('loadNext')"/>
    </table>
    <div class="table-wrapper__no-data" v-else>
      Nothing to display :(
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Observer from '../Observer/Observer.vue'

@Component({
  components: { Observer },
})
export default class Table extends Vue {
  @Prop({ type: Array, required: true }) columns!: string[]
  @Prop({ type: Array, required: true }) rows!: any[]
  @Prop({ type: Boolean, required: true }) loading!: boolean
}
</script>

<style lang="scss">
.table-wrapper {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  table {
    width: 100%;
    border-radius: 10px;
    border-collapse: collapse;
    overflow: hidden;

    tr {
      color: #808080;
      background-color: #ffffff;
    }

    tr:hover, tr:nth-child(2n):hover {
      background-color: #c4c4c4;
    }

    tr td {
      height: 50px;
      padding: 2px 12px;
      vertical-align: middle;
    }
    tr:nth-child(2n) {
      background-color: #f5f5f5;
    }

    thead tr {
      height: 60px;
    }
    thead th {
      vertical-align: middle;
      font-weight: 300;
      background-color: #36304a;
      color: white;
      text-align: left;
      padding: 4px 12px;
      font-size: 1.2em;
    }

    /*thead th:hover {*/
    /*background-color: #494364;*/
    /*cursor: pointer;*/
    /*}*/
  }

  &__no-data {
    border: 1px solid white;
    border-radius: 10px;
    width: 100%;
    padding: 40px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: white;
    color: #808080;
  }
}
</style>
