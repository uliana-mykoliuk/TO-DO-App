import React from "react";
import "./Button.css";

const Button = ({ label, variant, onClick, className }) => {
	let btnClassName;
	switch (variant) {
		case "add":
			btnClassName = `btn add ${className}`;
			break;
		case "remove":
		default:
			btnClassName = `btn remove ${className}`;
	}

	return (
		<button onClick={onClick} className={btnClassName}>
			{label}
		</button>
	);
};

export default Button;
