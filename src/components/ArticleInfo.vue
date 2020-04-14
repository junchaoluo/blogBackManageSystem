<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">编辑文章</div>
      <div>
        <el-form ref="form" v-model="article" label-width="80px">
          <el-form-item label="主题:">
            <label>{{article.title}}</label>
          </el-form-item>
          <el-form-item label="简介:">
            <label>{{article.introduct}}</label>
          </el-form-item>
          <el-form-item label="标签:">
           <el-tag v-for="tag in article.tagTypeList" :key="tag.tagTypeId"  :color="tag.color">
              {{tag.tagName}}
           </el-tag>
          </el-form-item>
          <el-form-item label="内容:">
            <mavon-editor disabled v-model="article.content"></mavon-editor>
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
      article: {}
    }
  },
  created () {
    this.getArticleInfo()
  },
  methods: {
    getArticleInfo () {
      axios.get('/api/sys/article/getArticleInfo/' + this.$route.params.id).then((res) => {
        this.article = res.data.articleInfo
      }).catch((res) => {
        this.$message.error(res.data.msg)
      })
    }
  }
}
</script>

<style>
.el-tag{
  color: white;
}
</style>
