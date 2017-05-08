import Frame from '../frame/subroute.vue'

import index from '../page/index.vue'
import content from '../page/content.vue'

import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'

export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/user',
    component: Frame,
    children: [
      { path: '/', component: userIndex },
      { path: 'info', component: userInfo },
      { path: 'love', component: userLove }
    ]
  }
]
