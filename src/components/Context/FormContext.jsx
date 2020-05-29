import React, { useState, createContext, useMemo, useContext } from 'react';

const FormContext = createContext();

export function FormProvider(props) {
	const [info, setInfo] = useState({ username: '', password: '' });

	const handleChange = event => {
		setInfo({
			...info,
			[event.target.name]: event.target.value,
		});
	};

	const value = useMemo(() => {
		return {
			info,
			handleChange,
		};
	}, [info]);

	return <FormContext.Provider value={value} {...props} />;
}

export function useForm() {
	const context = useContext(FormContext);
	if (!context) {
		console.error('useForm must be inside FormContext provider');
	}
	return context;
}
