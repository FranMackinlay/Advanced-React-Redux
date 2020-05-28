import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default class Register extends Component {
	state = {
		username: '',
		password: '',
	};

	userTyping = event => {
		this.setState({
			username: event.target.value,
		});
	};
	passTyping = event => {
		this.setState({
			password: event.target.value,
		});
	};

	onSubmit = async event => {
		event.preventDefault();
		await this.props.userLogin(this.state);
		console.log('LOGIN PROPS', this.props);
		if (this.props.isUserLoggedIn) {
			this.props.history.push('/anuncios');
		}
	};

	goToRegistration = () => {
		this.props.history.push('/register');
	};

	render() {
		console.log('LOGIN PROPS', this.props);
		return (
			<div className='login'>
				<h1>Login</h1>
				<form onSubmit={this.onSubmit}>
					<input type='text' onChange={this.userTyping} placeholder='Username..' required />
					<input type='password' onChange={this.passTyping} placeholder='Password..' required />
					<button type='submit'>Log In</button>
					<Link to='/register'>
						<button className='create-account'>Don't have an account?</button>
					</Link>
				</form>
			</div>
		);
	}
}
