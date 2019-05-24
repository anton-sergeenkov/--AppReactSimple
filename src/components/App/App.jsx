import React, { Component } from 'react';
import AppChild from '../AppChild/AppChild';
import AppRedux from '../AppRedux/AppRedux';

export default class App extends Component {
	render() {
		return (
			<div>
				<AppChild />
				<AppRedux />
			</div>
		);
	}
}
