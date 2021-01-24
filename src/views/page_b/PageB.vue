<template>
  <el-dialog :visible.sync="dialogVisible">
    <el-form ref="demoData" :model="demoData" label-width="90px">
      <el-row>
        <el-col>
          <el-form-item label="B组件的数据">
            <el-input v-model="demoData.demo2"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <div>
            <el-button>
              <router-link to='/demo2/2'>点击我跳转</router-link>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "PageB",
  data(){
    return {
      dialogVisible: false,
      demoData: {
        demo2:''
      }
    }
  },
  methods: {
    showDialog(data){
      this.dialogVisible = true
      this.demoData.demo2 = data
    }
  }
}
</script>

<style scoped>

</style>
