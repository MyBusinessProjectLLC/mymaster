import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";

const routes = [
	{
		path: "/",
		name: "main_page",
		component: MainView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
