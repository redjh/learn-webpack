import _ from 'loadsh'

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], '  ');
    return element;
}

document.body.appendChild(component())

/* webpack 处理css ～ 需要css-loader、style-loader */
require('./css/test.css')

/* webpack 处理css ～ 需要css-loader、style-loader、less-loader */
require('./css/test.less')

/* webpak中使用vue */
import Vue from 'vue'
const app = new Vue({
	el:'#app',
	data:{
		message:'Hello webpack'
	}
});