import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setIncrement, getAsyncData } from '../../redux/actions';

import Name from './Name';
import NameHooks from './NameHooks';

const AppRedux = ({
	reduxStarterData,
	reduxAsyncData,
	setIncrement,
	getAsyncData
}) => {

	useEffect(() => {
		// getAsyncData();
	}, []);

	// console.log('View', reduxStarterData);

	return (
		<>
			<button onClick={() => setIncrement()}>Increment</button>
			<Name />
			<NameHooks />
		</>
	);
}

const mapStateToProps = state => ({
	reduxStarterData: state.reducerStarter,
	reduxAsyncData: state.reducerAsyncData
})

const mapDispatchToProps = {
	setIncrement,
	getAsyncData
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRedux);
