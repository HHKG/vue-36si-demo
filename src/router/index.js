import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Person from '@/components/Person'
import antHome from '@/components/antHome'
import SampleRecord from '@/components/SampleRecord'
import Feedback from '@/components/Feedback'
import MyCollect from '@/components/MyCollect'
import ProduceList from '@/components/ProduceList'
import HomePage from '@/components/HomePage'
import Apply from '@/components/Apply'
import ProduceJoin from '@/components/ProduceJoin'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'antHome',
			component: antHome,
		},
		{
			path: '/Person',
			name: 'Person',
			component: Person,
			children: []
		},
		{
			path: '/SampleRecord',
			name: 'SampleRecord',
			component: SampleRecord
		},
		{
			path: '/Feedback',
			name: 'Feedback',
			component: Feedback
		},
		{
			path: '/MyCollect',
			name: 'MyCollect',
			component: MyCollect
		},
		{
			path: '/ProduceList',
			name: 'ProduceList',
			component: ProduceList
		},
		{
			path: '/HomePage',
			name: 'HomePage',
			component: HomePage
		},
		{
			path: '/Apply',
			name: 'Apply',
			component: Apply
		},
    {
      path:'/ProduceJoin',
      name:'ProduceJoin',
      component:ProduceJoin
    }
	]
})
