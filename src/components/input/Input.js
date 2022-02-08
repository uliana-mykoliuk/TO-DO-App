import React from "react";
import "./Input.css";

const Input = ({ id, name, placeholder, onEnter, className, inputRef }) => {
	let inputClassName = `input ${className}`;
	return (
		<input
			id={id}
			name={name}
			type="text"
			placeholder={placeholder}
			onKeyPress={event => {
				if (event.key === "Enter") {
					onEnter();
				}
			}}
			className={inputClassName}
			ref={inputRef}
		/>
	);
};

export default Input;
