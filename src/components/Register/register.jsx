import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useForm } from '../Context/FormContext';
import Form from '../Form/Form';
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
		</div>
	);
}
