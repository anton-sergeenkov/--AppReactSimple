import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../../redux/actions';

const AppRedux = ({ name, setName }) => {
	return (
		<>
            <h1>{name}</h1>
			<button onClick={() => setName('Jack')}>Name Jack</button>
			<button onClick={() => setName('Tony')}>Name Tony</button>
		</>
	);
}

const mapStateToProps = state => ({
	name: state.reducerStarter.name
})

const mapDispatchToProps = {
	setName
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRedux);
