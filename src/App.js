import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './App.actions';
import { getIsLoaded } from './App.selectors';
import "./styles/style.scss";
import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
	const dispatch = useDispatch();
	const isLoaded = useSelector(getIsLoaded);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div className="app">
			<Header />
			{isLoaded ? <UserList /> : 'loading'}
		</div>
	);
};

export default App;