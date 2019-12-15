/* webpack 处理css ～ 需要css-loader、style-loader */
require('./css/test.css')

/* webpack 处理css ～ 需要css-loader、style-loader、less-loader */
require('./css/test.less')

/* webpak中使用vue */
import Vue from 'vue'

/* 逐步抽离为 vue文件的过程 */
/* 第一步 在vue实例对象中写template*/
// new Vue({
// 	el: '#app',
// 	template: `
// 	<div>
// 		<h2>{{message}}</h2>
// 		<button @click="buttonClick">按钮</button>
// 	</div>	
// 	`,
// 	data() {
// 		return {
// 			message: 'Hello webpack'
// 		}
// 	},
// 	methods: {
// 		buttonClick() {
// 			console.log('button click');
// 		}
// 	}
// });

/* 第二步 抽离template ,注册组件*/
// const App = {
// 	template: `
// 	<div>
// 		<h2>{{message}}</h2>
// 		<button @click="buttonClick">按钮</button>
// 	</div>	
// 	`,
// 	data() {
// 		return {
// 			message: 'Hello webpack'
// 		}
// 	},
// 	methods: {
// 		buttonClick() {
// 			console.log('button click');
// 		}
// 	}
// }

// new Vue({
// 	el: '#app',
// 	template:'<app/>',
// 	components:{
// 		App
// 	}
// });

/* 第三步 将App单独写到js文件,并导入App.js */

// import App from './js/App.js'
// new Vue({
// 	el: '#app',
// 	template: '<app/>',
// 	components: {
// 		App
// 	}
// });

/* 
第四步 将App.js转为对应的App.vue文件,需要安装并配置vue-loader,vue-template-compiler 
webpack版本:3.6
*/
import App from './views/App'
new Vue({
	el: '#app',
	template: '<app/>',
	components: {
		App
	}
});
