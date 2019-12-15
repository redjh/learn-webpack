<template>
	<div>
		<h2>{{message}}</h2>
		<p> 我是 App.vue 文件</p>
		<button @click="buttonClick">按钮</button>
		<test></test>
	</div>	
</template>

<script>
	import Test from './Test'
	export default{
		name:'App',
		components:{
			Test
		},
		data() {
			return {
				message: 'Hello webpack'
			}
		},
		methods: {
			buttonClick() {
				console.log('button click');
			}
		}
	}
</script>

<style scoped="scoped">
	p{
		color: red;
	}
</style>
