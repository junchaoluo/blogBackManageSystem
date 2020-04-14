<template>
  <div>
     <el-form label-width="80px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">添加照片</div>
        <div>
          <el-form-item label="分类：">
            <el-input v-model="photo.classify"></el-input>
          </el-form-item>
          <el-form-item label="主题：">
            <el-input v-model="photo.title"></el-input>
          </el-form-item>
          <el-form-item label="照片：">
            <el-upload
              :action="uploadUrl"
             list-type="picture-card"
             :file-list="fileList"
             :on-success="handleSuccess"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input type="textarea" v-model="photo.description"></el-input>
          </el-form-item>
       </div>
      </el-card>
      <br>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddPhoto',
  data () {
    return {
      uploadUrl: '/api/sys/photo/upload',
      photo: {},
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: []
    }
  },
  created () {

  },
  methods: {
    handleRemove (file, fileList) {
      this.fileList = fileList
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess (response, file, fileList) {
      console.log(response, file, fileList)
      if (response.code === 0) {
        this.$message({
          message: '上传成功！',
          type: 'success'
        })
        this.fileList = fileList
      } else {
        this.$message.error('上传失败！')
      }
    },
    onSubmit () {
      let array = []
      this.fileList.forEach(element => {
        array.push(element.response.filePath)
      })
      this.photo.photo = array[0]
      axios.post('/api/sys/photo/save', this.photo).then((res) => {
        this.$message.success(res.data.msg)
      }).catch((res) => {
        this.$message.error(res.data.msg)
      })
    }
  }
}
</script>

<style>

</style>
