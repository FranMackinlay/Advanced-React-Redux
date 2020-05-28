import React, { useEffect } from 'react';
import Header from '../Header/header';
import Card from '../Card/card';
import './ads.css';
import { fetchAds } from '../../store/actions';
import { useDispatch } from 'react-redux';

export default function Ads(props) {
	const renderAdList = adsList => adsList.map(ad => <Card key={ad._id} ad={ad} />);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAds());
	}, [dispatch]);

	const isLogged = localStorage.getItem('isLogged');
	if (!isLogged) props.history.push('/login');
	if (props.ads === []) return <h1>Loading Ads...</h1>;
	return (
		<div className='content-container'>
			<Header />
			<div className='ads-container'>
				<ul>{renderAdList(props.ads)}</ul>
			</div>
		</div>
	);
}
