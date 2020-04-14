<template>
  <div>
    <el-table :data="articleList" stripe border>
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="170" sortable></el-table-column>
      <el-table-column prop="readNum" label="阅读量" width="120"></el-table-column>
      <el-table-column prop="title" label="文章标题" width="250" show-overflow-tooltip></el-table-column>
      <el-table-column prop="introduct" label="简介" width="350" show-overflow-tooltip></el-table-column>
      <el-table-column prop="content" label="内容" show-overflow-tooltip></el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
      <template slot-scope="scope">
        <el-button @click="viewArticle(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" @click="editArticle(scope.row)" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
  background @current-change="pageChange"
  layout="prev, pager, next"
  :total="page.totalCount">
</el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleList',
  data () {
    return {
      condition: {
        keywords: ''
      },
      page: {
        pageNum: 1,
        pageSize: 0,
        totalCount: 0
      },
      articleList: []
    }
  },
  created () {
    this.getArticleList()
  },
  mounted () {

  },
  methods: {
    getArticleList () {
      axios.post('/api//sys/article/getArticleListByKewords/' + this.page.pageNum, this.condition).then((res) => {
        this.articleList = res.data.page.list
        this.page.pageNum = res.data.page.currPage
        this.page.pageSize = res.data.page.pageSize
        this.page.totalCount = res.data.page.totalCount
      }).catch((res) => {
        this.$message.error(res.data.msg)
      })
    },
    pageChange (value) {
      this.page.pageNum = value
      this.getArticleList()
    },
    viewArticle (row) {
      this.$router.push('/ArticleInfo/' + row.articleId)
    },
    editArticle (row) {
      this.$router.push('/EditArticle/' + row.articleId)
    }
  }
}
</script>

<style>

</style>
