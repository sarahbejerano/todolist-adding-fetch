import React, { useState } from "react";
import "bootstrap";

const TodoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputList, setInputList] = useState([]);

	function addItem(e) {
		if (e.key == "Enter") {
			const list = inputList.concat(inputValue);
			setInputList(list);
			setInputValue("");
		}
	}

	function deleteItem(index) {
		setInputList(function(currentList) {
			return currentList.filter(function(el, elIndex) {
				return index !== elIndex;
			});
		});
	}

	return (
		<div>
			<h1>TODO List</h1>
			<h3>
				{inputList.length == 0
					? "No task to display"
					: inputList.length == 1
					? "there is one task left"
					: "The number of tasks left is" + " " + inputList.length}
			</h3>
			<input
				type="text"
				id="list"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyPress={addItem}
				placeholder="What to do next?"
			/>
			<div>
				{inputList.map((element, index) => {
					return (
						<div key={element + index}>
							<input type="text" value={element} />
							<button
								className="btn btn-outline-danger btn-sm"
								onClick={() => deleteItem(index)}>
								x
							</button>
						</div>
					);
				})}
			</div>
			<button onClick={() => setInputList([])}>Delete All</button>
		</div>
	);
};

export default TodoList;
