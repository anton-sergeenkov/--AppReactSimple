import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setName, setIncrement, getAsyncData } from '../../redux/actions';

const AppRedux = ({
	reduxStarterData,
	reduxAsyncData,
	setName,
	setIncrement,
	getAsyncData
}) => {

	useEffect(() => {
		// getAsyncData();
	}, []);

	// console.log('View', reduxStarterData);

	return (
		<>
			<button onClick={() => setName('Jack')}>Name Jack</button>
			<button onClick={() => setName('Tony')}>Name Tony</button>
			<button onClick={() => setIncrement()}>Increment</button>
		</>
	);
}

const mapStateToProps = state => ({
	reduxStarterData: state.reducerStarter,
	reduxAsyncData: state.reducerAsyncData
})

const mapDispatchToProps = {
	setName,
	setIncrement,
	getAsyncData
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRedux);
