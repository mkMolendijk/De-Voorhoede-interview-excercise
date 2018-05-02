import Vue from 'vue'
import Router from 'vue-router'
import BlogPosts from '../components/BlogPosts'
import BlogPost from '../components/BlogPost'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogPosts',
      component: BlogPosts
    },
    {
      path: '/post/:slug',
      name: 'BlogPost',
      component: BlogPost
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 800)
    })
  }
})
