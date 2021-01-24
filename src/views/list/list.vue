<template>
  <div>
    <div class="app-container">
      <p>这是用户列表页</p>
      <p>模拟缓存数据：</p>
      <el-input v-model="username" placeholder="请输入用户名" />
    </div>
  </div>
</template>
<script>
import pageCacheMix from '@/mixins/pageCacheMix'
export default {
  name: "UserList",
  mixins: [pageCacheMix],
  data() {
    return {
      username: ""
    };
  }
};
</script>
