import React, { useEffect } from 'react';
import { useForm } from '../Context/FormContext';
import Form from '../Form/Form';
import './login.css';

export default function Login(props) {
	const { info } = useForm();

	const onSubmit = async event => {
		event.preventDefault();
		console.log(info);
		await props.userLogin(info);
	};
	useEffect(() => {
		if (props.isUserLoggedIn) {
			props.history.push('/anuncios');
		}
	}, [props]);

	return (
		<div className='login'>
			<h1>Login</h1>
			<Form onSubmit={onSubmit}></Form>
		</div>
	);
}
