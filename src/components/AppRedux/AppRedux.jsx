import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../redux/actions';

class AppRedux extends Component {
	componentDidMount() {
		this.props.getPhotos('New Year');
	}
	render() {
		console.log(this.props.myValue);
		return (<div></div>);
	}
}

const mapStateToProps = state => ({
	myValue: state.myReducer
})
const mapDispatchToProps = {
	getPhotos
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRedux);
