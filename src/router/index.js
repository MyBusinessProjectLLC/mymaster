import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import Authorization from '@/views/AuthorizationView.vue'

const routes = [
	{
		path: "/",
		name: "main_page",
		component: MainView,
	},
	{
		path: "/authorization/:type?",
		name: "authorization",
		component: Authorization,
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
