<template>
  <div>
    <div class="app-container">
      <p>这是用户编辑页</p>
      <el-input v-model="username" placeholder="请输入用户名" />
    </div>
  </div>
</template>
<script>
export default {
  name: "UserEdit",
  data() {
    return {
      username: ""
    };
  }
};
</script>
