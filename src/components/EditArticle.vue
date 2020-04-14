<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">编辑文章</div>
      <div>
        <el-form ref="form" v-model="article" label-width="80px">
          <el-form-item label="主题:">
            <el-input v-model="article.title"></el-input>
          </el-form-item>
          <el-form-item label="简介:">
            <el-input type="textarea" v-model="article.introduct"></el-input>
          </el-form-item>
          <el-form-item label="标签:">
            <el-checkbox-group v-model="article.tagIdList">
              <el-checkbox v-for="item in tagList" :key="item.tagTypeId" :label="item.tagTypeId">{{item.tagName}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="内容:">
            <mavon-editor v-model="article.content"></mavon-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditArticle',
  data () {
    return {
      article: {},
      tagList: []
    }
  },
  created () {
    this.getArticleInfo()
    this.getTagDataList()
  },
  methods: {
    getArticleInfo () {
      axios.get('/api/sys/article/getArticleInfo/' + this.$route.params.id).then((res) => {
        this.article = res.data.articleInfo
      }).catch((res) => {
        this.$message.error(res.data.msg)
      })
    },
    getTagDataList () {
      axios.get('/api/sys/tagtype/getTagDataList').then((res) => {
        this.tagList = res.data.tagList
      })
    },
    onSubmit () {
      axios.post('/api/sys/article/updateArticle', this.article).then((res) => {
        this.$message.success(res.data.msg)
      })
    }
  }
}
</script>

<style>

</style>
