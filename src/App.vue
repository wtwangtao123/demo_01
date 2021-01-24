<template>
  <div id="app">
  <keep-alive :include="pageCache">
    <router-view v-if="$route.meta.keepAlive"/>
  </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters({
      pageCacheList: "getPageCacheList"
    }),
    pageCache() {
      return this.pageCacheList.join(",");
    }
  }
}
</script>


