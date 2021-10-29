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

	// function deletelist() {
	// 	setInputList(function(currentList) {
	// 		return currentList.filter(function(el, elIndex) {
	// 			return index !== elIndex;
	// 		});
	// 	});
	// }

	// function deletelist() {
	// 	setInputList([]);
	// }

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
						<input type="text" value={element} />
						<button
							className="btn btn-outline-danger btn-sm"
							onClick={() => deleteItem(index)}>
							x
						</button>
					</div>
				);
			})}
			<button
				className="btn btn-outline-black btn-sm"
				onClick={setInputList([])}>
				delete all
			</button>
		</div>
	);
};

export default TodoList;
