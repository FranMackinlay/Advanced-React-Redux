import React from 'react';
import { useForm } from '../Context/FormContext';

export default function Form({ onSubmit }) {
	const { handleChange, info } = useForm();
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				onSubmit(event);
			}}>
			<input type='text' onChange={handleChange} value={info.username} name='username' placeholder='Username..' required />
			<input type='password' onChange={handleChange} value={info.password} name='password' placeholder='Password..' required />

			<button type='submit'>Log In</button>
		</form>
	);
}
