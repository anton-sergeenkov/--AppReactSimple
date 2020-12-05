import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../redux/actions';

const NameHooks = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.reducerStarter.name)

	return (
		<>
            <h1>{name}</h1>
			<button onClick={() => dispatch(setName('Jack'))}>Name Jack</button>
			<button onClick={() => dispatch(setName('Tony'))}>Name Tony</button>
		</>
	);
}

export default NameHooks;
