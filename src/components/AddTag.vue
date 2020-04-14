<template>
  <div>
    <el-form label-width="80px">
      <el-card class="box-card" v-for="(tag,index) in tagList" :key="index">
        <div slot="header" class="clearfix">【{{index+1}}】</div>
        <div>
          <el-form-item label="标签名">
            <el-input v-model="tag.tagName"></el-input>
          </el-form-item>
          <el-form-item label="标签颜色">
            <el-color-picker v-model="tag.color"></el-color-picker>
          </el-form-item>
       </div>
      </el-card>
      <br>
      <el-button type="primary" size="small" @click="addMoreTag">添加更多</el-button>
      <el-button @click="onSubmit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddTag',
  data () {
    return {
      tagList: [{
        tagName: '',
        color: ''
      }]
    }
  },
  methods: {
    addMoreTag () {
      let tag = {
        tagName: '',
        color: ''
      }
      this.tagList.push(tag)
    },
    onSubmit () {
      console.log(this.tagList)
      axios.post('/api/sys/tagtype/saveTag', this.tagList).then((res) => {
        this.$message.success(res.data.msg)
      })
    }
  }
}
</script>

<style>

</style>
