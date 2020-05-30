import React from 'react';
import api from '../../services/api';
import { useForm } from '../Context/FormContext';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import './register.css';

const { register } = api();

export default function Register(props) {
	const { info } = useForm();

	const onSubmit = async event => {
		event.preventDefault();
		const { username, password } = info;
		const isRegistered = await register(username, password);

		if (isRegistered.error) {
			alert(isRegistered.error);
		} else {
			props.history.push('/login');
		}
	};

	return (
		<div className='registration'>
			<h1>Create Account</h1>
			<Form onSubmit={onSubmit} />
			<Link to='/login'>
				<button className='create-account'>Already have an account?</button>
			</Link>
		</div>
	);
}
