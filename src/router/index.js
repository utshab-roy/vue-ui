import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import sourceData from '@/Data.json'


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
			beforeEnter(to, from) {
				const exists = sourceData.destinations.find(
					destination => destination.id === parseInt(to.params.id)
				)

				if (!exists) return {
					name: 'NotFound',
					// allows keeping the URL while rendering a different page
					params: { pathMatch: to.path.split('/').slice(1) },
					query: to.query,
					hash: to.hash,
				}

			},
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
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/NotFound.vue'),
		},
	],
	// linkActiveClass: 'router-link-active', // this class will be added automatically to the active link
})

export default router
