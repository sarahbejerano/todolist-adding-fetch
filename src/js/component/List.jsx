import React, { useState, useEffect } from "react";
import "bootstrap";

const List = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputList, setInputList] = useState([""]);
	const delItem = index => {
		setInputList(inputList.filter((result, i) => index != i));
		useEffect(() => {
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/alesanchezr",
				{
					method: "PUT",
					body: JSON.stringify(setInputValue),
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
				.then(resp => {
					console.log(resp.ok);
					console.log(resp.status);
					console.log(resp.text());
					return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
				})
				.then(data => {
					//here is were your code should start after the fetch finishes
					console.log(data); //this will print on the console the exact object received from the server
				})
				.catch(error => {
					//error handling
					console.log(error);
				});
		}, []);
	};
	function addItem(e) {
		if (e.keyCode == 13) {
			setInputValue(inputValue);
			const list = inputList.concat(inputValue);
			setInputList(list);
			setInputValue("");
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
			<h1>Things to Do</h1>
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
