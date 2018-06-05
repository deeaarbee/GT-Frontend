import  home from '../components/home'
import single_article from '../components/single_article'

export default[
  {path:'/',component:home},
  {path:'/article/:slug',component:single_article},
]
