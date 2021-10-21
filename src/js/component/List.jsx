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
		setInputList(list => list.splice(index, 1));
		console.log(index);
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
				placeholder="What to do next?"
			/>

			{inputList.map((element, index) => {
				return (
					<div key={element + index}>
						<input
							type="text"
							value={element}
							readOnly
						/>
						<button onClick={() => deleteItem(index)}>x</button>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
