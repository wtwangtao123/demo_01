<template>
  <div>这里是page3页面
    <el-button @click="todo">返回</el-button>
  </div>

</template>

<script>
export default {
  name: "PageC",
  mounted(){
    console.log(this.$route)
  },
  methods: {
    todo(){
      history.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
