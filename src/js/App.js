export default {
	template: `
		<div>
			<h2>{{message}}</h2>
			<button @click="buttonClick">按钮</button>
		</div>	
		`,
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
