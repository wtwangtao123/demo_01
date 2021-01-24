import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageCacheList: []
  },
  getters:{
    getPageCacheList: state => {
      return state.pageCacheList;
    }
  },
  mutations: {
    ADD(state, pageName) {
      state.pageCacheList.push(pageName);
    },
    DEL(state, pageName) {
      state.pageCacheList.forEach((page, index) => {
        if (page === pageName) {
          state.pageCacheList.splice(index);
        }
      });
    }
  },
  actions: {
    add({ commit }, pageName) {
      commit("ADD", pageName);
    },
    delete({ commit }, pageName) {
      commit("DEL", pageName);
    }
  }
})

export default store

