import React from "react";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import "./GoalItem.css";

const GoalItem = ({ isDisabled, onClick, label, className }) => {
	return (
		<div className={`goal-item-container ${className}`}>
			<Checkbox isDisabled={isDisabled} />
			<div className="goal-item">{label}</div>
			<Button variant="remove" label="Remove Item" onClick={onClick} className="h-full" />
		</div>
	);
};

export default GoalItem;
