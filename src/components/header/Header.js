import React from "react";
import "./Header.css";

const Header = ({ label }) => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<header className="header">
			{label}
			<b>{year}</b>
		</header>
	);
};

export default Header;
