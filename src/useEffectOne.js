import React, { useEffect, useState } from 'react'

const UseEffectOne = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const handleResize = () => {
		setWindowWidth(window.innerWidth)
	}
	
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		//cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, [])

	return (
		<div>{windowWidth }</div>
	)
}

export default UseEffectOne