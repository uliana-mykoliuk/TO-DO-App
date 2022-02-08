import React, { useRef, useEffect, useState } from "react";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Header from "./components/header/Header";
import GoalItem from "./components/goal-item/GoalItem";

import "./App.css";

function App() {
	if (!localStorage.getItem("goals")) {
		localStorage.setItem("goals", JSON.stringify([]));
	}
	let goals = JSON.parse(localStorage.getItem("goals"));
	const [goalItems, setGoalItems] = useState(goals || []);
	const inputRef = useRef();

	const addItem = () => {
		if (inputRef.current.value) {
			setGoalItems([...goalItems, inputRef.current.value]);
			inputRef.current.value = "";
		}
	};

	useEffect(() => {
		localStorage.setItem("goals", JSON.stringify(goalItems));
		goals = JSON.parse(localStorage.getItem("goals"));
	}, [goalItems]);

	return (
		<div>
			<Header label="Goals List" />
			<main className="container">
				<div className="add-goal-item-input-button">
					<Input inputRef={inputRef} placeholder="Enter your goal here..." onEnter={addItem} />
					<Button
						label="Add Item"
						variant="add"
						onClick={() => {
							addItem();
						}}
					/>
				</div>
				<div className="div-goal-items">
					{goals.map((item, index) => (
						<GoalItem
							label={item}
							key={index}
							onClick={() => {
								setGoalItems(
									goalItems.filter((item, idx) => {
										return index !== idx;
									}),
								);
							}}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
