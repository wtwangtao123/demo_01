import { PageCacheConfig } from "../../utils/config";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "pageCacheMix",
  computed: {
    ...mapGetters({
      pageCacheList: "getPageCacheList"
    })
  },

  methods: {
    ...mapActions({
      addPageCache: "add",
      deletePageCache: "delete"
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.name && PageCacheConfig[to.name]) {
        if (vm.pageCacheList.includes(to.name)) {
          // no
        } else {
          to.meta.keepAlive = true;
          vm.addPageCache(to.name);
        }
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    // 当前路由配置了路由名以及缓存配置中配置了该路由才进行相关操作
    if (from.name && PageCacheConfig[from.name]) {
      if (PageCacheConfig[from.name].includes(to.path)) {
        // 配置中包含前往路径，则缓存，否则不缓存
        from.meta.keepAlive = true;
        if (this.pageCacheList.includes(from.name)) {
          // no
        } else {
          this.addPageCache(from.name);
        }
      } else {
        from.meta.keepAlive = false;
        this.deletePageCache(from.name);
      }
    }
    next();
  }
};
