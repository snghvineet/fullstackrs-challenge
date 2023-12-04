import { useState } from 'react';

export default function useInput(validator = (value) => null, state = '') {
	const [value, setValue] = useState(state);
	const [touched, setTouched] = useState(false);
	let error = validator(value);
	if (!touched) error = null;
	// console.log(touched);
	const onBlurHandler = () => setTouched(true);
	const reset = () => {
		setValue('');
		setTouched(false);
	};
	return { value, setValue, error, onBlurHandler, reset };
}
