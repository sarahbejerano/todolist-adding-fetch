import React, { useState } from "react";
import "bootstrap";

//create your first component
const TodoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputList, setInputList] = useState([]);

	function addItem(e) {
		//e.preventDefault(); this is only for buttons
		console.log(e.key);
		if (e.key == "Enter") {
			const list = inputList.concat(inputValue);
			setInputList(list);
			setInputValue("");
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
				placeholder="What to do next?"
			/>
			<div>
				{inputList.map((element, index) => {
					return (
						<>
							<input
								type="text"
								key={element + index}
								value={element}
								readOnly
							/>
							<button>x</button>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default TodoList;
