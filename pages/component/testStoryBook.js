import React, { Component } from 'react';

export default class extends Component {
	componentDidMount() {
		
	}
	render() {
		return <div onClick={this.props.onClick}>你好</div>;
	}
}
