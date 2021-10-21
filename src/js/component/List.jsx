import React, { useState } from "react";
import "bootstrap";

//create your first component
const TodoList = () => {
	const [inputValue, setInputValue] = useState("text");
	const [inputList, setInputList] = useState([" ", " ", " "]);

	function addItem(e) {
		//e.preventDefault(); this is only for buttons
		if (e.onKeyPress == 13) {
			setInputValue(inputValue);
			const list = inputList.concat(inputValue);
			setInputList(list);
		}
	}

	return (
		<div>
			<h1>TODO List</h1>
			<input
				type="text"
				id="list"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyPress={addItem}
			/>
			<div>{inputList.map}</div>
		</div>
	);
};

export default TodoList;
