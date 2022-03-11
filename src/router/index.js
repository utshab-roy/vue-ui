import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', name: 'home', component: Home },
		// which is lazy-loaded when the route is visited
		{
			path: '/destination/:id/:slug',
			name: 'destination.show',
			component: () => import('@/views/DestinationShow.vue'),
			// we used ...route.params so that we can get all the route parameter value
			props: route => ({ ...route.params, id: parseInt(route.params.id) }),
			// nested route example
			children: [
				{
					path: ':experienceSlug',
					name: 'experience.show',
					component: () => import('@/views/ExperienceShow.vue'),
					// we used ...route.params so that we can get all the route parameter value, id, slug, experienceSlug
					props: route => ({ ...route.params, id: parseInt(route.params.id) }),
				},
			]
		},
		// {
		// 	path: '/destination/:id/:slug/:experienceSlug',
		// 	name: 'experience.show',
		// 	component: () => import('@/views/ExperienceShow.vue'),
		// 	// we used ...route.params so that we can get all the route parameter value, id, slug, experienceSlug
		// 	props: route => ({ ...route.params, id: parseInt(route.params.id) }),
		// },
	],
	// linkActiveClass: 'router-link-active', // this class will be added automatically to the active link
})

export default router
