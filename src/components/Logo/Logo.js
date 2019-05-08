import React from 'react';
import classes from './Logo.css';
import icon from '../../assets/icon.svg';

export default class Logo extends React.Component {
	render() {
		return (
			<div>
				<h2 className={classes.headerItem}>AppChild</h2>
				<img src={icon} width="200px" />
			</div>
		);
	}
}
