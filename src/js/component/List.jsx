import React, { useState } from "react";
import "bootstrap";

const TodoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputList, setInputList] = useState([]);

	import React, { useEffect, useState } from "react";
	//include images into your bundle
	//create your first component
	const List = () => {
		const [inputValue, setInputValue] = useState("");
		const [inputList, setInputList] = useState(["Niessa", "Sandy", "Liela"]);
		const delItem = index => {
			setInputList(inputList.filter((result, i) => index != i));
			useEffect(() => {
				fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/pandapandapanda"
				)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setInputList(data));
			}, []); // An empty array is a second parameter used to only run once in useEffect, otherwise the it will run every time there is an update
		};
		function addItem(e) {
			if (e.keyCode == 13) {
				setInputValue(inputValue);
				const list = inputList.concat(inputValue);
				setInputList(list);
				fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/pandapandapanda",
					{
						method: "PUT",
						body: JSON.stringify(list),
						headers: {
							"Content-Type": "application/json"
						}
					}
				).then(response => {
					if (response.ok) {
						fetch(
							"https://assets.breatheco.de/apis/fake/todos/user/pandapandapanda"
						)
							.then(response => {
								if (!response.ok) {
									throw new Error(response.statusText);
								}
								return response.json();
							})
							.then(data => setInputList(data))
							.catch(error => console.error(error));
					}
				});
			}
		}
		return (
			<div className="text-center mt-5">
				<h1>ToDo List</h1>
				<h3>{inputList.length}</h3>
				<input
					type="text"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					onKeyUp={addItem}
				/>
				<div className="text-center mt-5">
					{inputList.map((result, index) => (
						<>
							<li key={index}>
								{result}
								<button onClick={() => delItem(index)}>
									<i
										className="fa fa-times"
										aria-hidden="true"></i>
								</button>
							</li>
						</>
					))}
					<button onClick={() => setInputList([])}>Delete</button>
				</div>
			</div>
		);
	};
	export default List;
	

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
