import Vue from 'vue';
import VueRouter from 'vue-router';
import Align from './align/index.vue';
import Form from './form/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode : 'history',
	routes : [
		{
			path : '/align',
			name : 'align',
			component : Align
		},
		{
			path : '/form',
			name : 'form',
			component : Form
		}
	]
});

console.log(router, 'router');

export default router;
