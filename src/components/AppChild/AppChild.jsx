import React, { Component } from 'react';
import classes from './AppChild.scss';
import icon from '../../assets/icon.svg';

export default class AppChild extends Component {
	render() {
		return (
			<div>
				<h2 className={classes.headerItem}>AppChild</h2>
				<img src={icon} width="200px" />
			</div>
		);
	}
}
