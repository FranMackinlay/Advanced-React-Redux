import React, { useEffect } from 'react';
import { useForm } from '../Context/FormContext';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login(props) {
	const { info, setInfo } = useForm();

	const onSubmit = async event => {
		event.preventDefault();
		console.log(info);
		await props.userLogin(info);
		if (props.isUserLoggedIn) {
			props.history.push('/anuncios');
			setInfo({
				username: '',
				password: '',
			});
		}
	};

	useEffect(() => {}, [props]);

	return (
		<div className='login'>
			<h1>Login</h1>
			<Form onSubmit={onSubmit}></Form>
			<Link to='/register'>
				<button className='create-account'>Don't have an account?</button>
			</Link>
		</div>
	);
}
