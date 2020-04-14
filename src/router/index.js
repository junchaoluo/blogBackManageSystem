import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import AddArticle from '@/components/AddArticle'
import TagList from '@/components/TagList'
import AddTag from '@/components/AddTag'
import ArticleInfo from '@/components/ArticleInfo'
import EditArticle from '@/components/EditArticle'
import PhotoList from '@/components/PhotoList'
import AddPhoto from '@/components/AddPhoto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: ArticleList,
      component: ArticleList
    },
    {
      path: '/AddArticle',
      name: AddArticle,
      component: AddArticle
    },
    {
      path: '/TagList',
      name: TagList,
      component: TagList
    },
    {
      path: '/AddTag',
      name: AddTag,
      component: AddTag
    },
    {
      path: '/ArticleInfo/:id',
      name: ArticleInfo,
      component: ArticleInfo
    },
    {
      path: '/EditArticle/:id',
      name: EditArticle,
      component: EditArticle
    },
    {
      path: '/PhotoList',
      name: PhotoList,
      component: PhotoList
    },
    {
      path: '/AddPhoto',
      name: AddPhoto,
      component: AddPhoto
    }
  ]
})
