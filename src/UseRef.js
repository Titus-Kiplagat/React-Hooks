import { forwardRef } from 'react';
import { useRef, useEffect } from 'react';
import Input from './ForwardRef'


const UseRef = () => {
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const submitRef = useRef(null);

	useEffect(() => {
		// alert('page loaded')
		firstNameRef.current.focus()
	}, [])

	function firstKeyDown(e) {
		if(e.key === 'Enter')  lastNameRef.current.focus()
	}

	function lastKeyDown(e) {
		if(e.key === 'Enter') submitRef.current.focus()
	}

	function submitKeyDown(e) {
		console.log('Form submitted')
	}

	return (
    <div className="container">
      <Input onKeyDown={firstKeyDown} ref={firstNameRef} type="text" placeholder="Enter first name"/>
      <Input onKeyDown={lastKeyDown} ref={lastNameRef} type="text" placeholder="Enter last name"/>
      <button onKeyDown={submitKeyDown} ref={submitRef}>SUBMIT</button>
    </div>
  );
};

export default UseRef;
