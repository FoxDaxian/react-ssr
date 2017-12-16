import React, { Component } from 'react'
import Btn from '../component/index.js'


export default class Index extends Component {

	show () {
		console.log('你好')
	}

	render() {
		return <div>
			<Btn></Btn>
			<button onClick={this.show.bind(this)}>show</button>
			<h1>你好</h1>
		</div>
	}
}
