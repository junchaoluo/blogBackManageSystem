<template>
  <div>
    <el-table :data="photoList" stripe border>
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="170" sortable></el-table-column>
      <el-table-column prop="classify" label="分类" width="120"></el-table-column>
      <!-- <el-table-column label="图片" width="250">
        <template slot-scope="scope">
           <img :src="scope.row.photo" width="40" height="40"/>
        </template>
      </el-table-column> -->
      <el-table-column prop="introduct" label="简介" width="350" show-overflow-tooltip></el-table-column>
      <el-table-column prop="description" label="说明" show-overflow-tooltip></el-table-column>
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
  name: 'PhotoList',
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
      photoList: []
    }
  },
  created () {
    this.getPhotoList()
  },
  methods: {
    getPhotoList () {
      axios.post('/api/sys/photo/list/' + this.page.pageNum, this.condition).then((res) => {
        this.photoList = res.data.page.list
        this.page.pageNum = res.data.page.currPage
        this.page.pageSize = res.data.page.pageSize
        this.page.totalCount = res.data.page.totalCount
        console.log(this.photoList)
      }).catch((res) => {
        this.$message.error(res.data.msg)
      })
    },
    pageChange (value) {
      this.page.pageNum = value
      this.getArticleList()
    }
  }
}
</script>

<style>

</style>
