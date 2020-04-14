<template>
  <div>
    <el-card class="box-card" shadow="always">
    <el-tag v-for="tag in tagList" :key="tag.tagTypeId"  :color="tag.color">
    {{tag.tagName}}
    </el-tag>
  </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TagList',
  data () {
    return {
      tagList: []
    }
  },
  created () {
    this.getTagDataList()
  },
  methods: {
    getTagDataList () {
      axios.get('/api/sys/tagtype/getTagDataList').then((res) => {
        this.tagList = res.data.tagList
      })
    }
  }
}
</script>
<style>
.el-tag{
  color: white;
  margin: 0.5%;
  font-size: 13px;
}
</style>
