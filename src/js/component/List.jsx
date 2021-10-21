import React, { useState } from "react";
import "bootstrap";

//create your first component
const TodoList = () => {
	const [inputValue, setInputValue] = useState("text");
	const [inputList, setInputList] = useState([ " ", " " , " " ]);

	function addItem() {
		setInputValue (inputValue);
		const list = inputList;
		setInputList(list);
		console.log(TodoList);
		
	}
	return (
		<div>
			<h1>TODO List</h1>
			<input type="text" id="list" />
		</div>
	);
};

export default TodoList;
