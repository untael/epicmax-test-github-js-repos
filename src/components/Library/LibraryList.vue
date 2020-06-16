<template>
  <div class="library-list">
    <table-wrapper
      :columns="columns"
      :rows="libraries"
      :loading="loading"
      @loadNext="getLibs(true)"
    />
    <loader v-if="loading"></loader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import api from '../../modules/api'
import Library from '../../classes/Library/Library'
import TableWrapper from '../Table/TableWrapper.vue'
import Loader from '../Loader/Loader.vue'

@Component({
  components: { Loader, TableWrapper },
})
export default class LibraryList extends Vue {
  libraries: Library[] = []
  loading = false
  page = 1
  perPage = 20
  sort = 'stars'
  sortOrder = 'desc'

  get columns (): string[] {
    const libraryExample: Library = new Library()
    return libraryExample.table_columns
  }

  async getLibs (next?: boolean): Promise<void> {
    if (next) this.page += 1
    this.loading = true
    const params = {
      page: this.page,
      q: 'javascript',
      sort: this.sort,
      type: 'Repositories',
      per_page: this.perPage,
      order: this.sortOrder,
    }
    const requestedLibraries: Library[] = await api.libraries.get(params)
    this.libraries = [...this.libraries, ...requestedLibraries]
    this.loading = false
  }

  mounted () {
    this.getLibs()
  }
}
</script>

<style lang="scss">
.library-list {
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
