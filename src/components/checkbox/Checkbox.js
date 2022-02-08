import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ isDisabled }) => {
	const [isChecked, setIsChecked] = useState(false);
	let checkboxClassName = `checkbox ${isChecked ? "checkbox-checked" : ""} ${isDisabled ? "checkbox-disabled" : ""}`;

	return (
		<div className={checkboxClassName} onClick={() => setIsChecked(!isChecked)}>
			<input type="checkbox" checked={isChecked} readOnly />
		</div>
	);
};

export default Checkbox;
