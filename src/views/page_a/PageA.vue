<template>
  <el-container>
    <el-form ref="formData" :model="formData" label-width="100px">
      <el-row>
        <el-col :span="20">
          <el-form-item label="A组件的数据">
            <el-input v-model="formData.demo1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="getData">点击</el-button>
        </el-col>
        <el-col :span="10">
          <el-input v-model="formData.aaa"></el-input>
          <p>{{formData.aaa}}</p>
        </el-col>

        <el-col>
          <el-divider content-position="left" style="margin-top:50px">传送数据给子组件</el-divider>
          <el-button @click="putData">传送数据</el-button>
        </el-col>
      </el-row>
    </el-form>
    <page-b ref="demo2"></page-b>
  </el-container>
</template>

<script>
import PageB from "../page_b/PageB";
export default {
  name: "PageA",
  components: {PageB},
  data(){
    return {
      formData: {
        demo1:'',
        aaa: ''
      }
    }
  },
  methods:{
    getData(){
      setTimeout(()=>{
        this.formData.demo1 = '李四'
      },3000)
    },
    putData(){
      this.$refs.demo2.showDialog(this.formData.demo1)
    }
  },

  // beforeRouteLeave(to,from,next){
  //   from.meta.keepAlive = true
  //   console.log('to:',to)
  //   console.log('from',from)
  //   next()
  // }
}
</script>

<style scoped>

</style>
