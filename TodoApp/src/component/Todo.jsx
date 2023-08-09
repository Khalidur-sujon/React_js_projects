/* eslint-disable no-unused-vars */
// external import
import { useState } from "react";

export default function Todo() {
	const [inputData, setinput] = useState("");
	const [item, setitem] = useState([]);
	const [toggle, settoggle] = useState(true);
	const [isEditItem, setisEditItem] = useState(null);

	const addItem = () => {
		if (!inputData) {
			alert("write something on the todo box");
		} else if (inputData && !toggle) {
			setitem(
				item.map((element) => {
					if (element.id === isEditItem) {
						console.log({ ...element, name: inputData });
						return { ...element, name: inputData };
					}
					return element;
				})
			);
			settoggle(true);
			setinput("");
			setisEditItem(null);
		} else {
			const allInputData = {
				id: new Date().getTime().toString(),
				name: inputData,
			};
			setitem([...item, allInputData]);
			setinput("");
		}
	};

	//edit item
	const editItem = (id) => {
		const selectEditItem = item.find((element) => element.id === id);
		settoggle(false);
		setinput(selectEditItem.name);
		setisEditItem(id);
	};

	// delete items
	const deleteItem = (id) => {
		const updatedItem = item.filter((element) => element.id !== id);
		setitem(updatedItem);
	};

	// remove all
	const removeAllItems = () => {
		setitem([]);
	};

	return (
		<div className="Container">
			<h1>My Todo</h1>
			<div>
				<input
					id="inputField"
					type="text"
					value={inputData}
					placeholder="Add your todo"
					onChange={(e) => setinput(e.target.value)}
				/>
				{toggle ? (
					<button type="button" onClick={addItem}>
						Add
					</button>
				) : (
					<button type="button" onClick={addItem}>
						Save
					</button>
				)}
			</div>
			<div className="show-list">
				{item.map((element) => {
					return (
						<div className="each-item" key={element.id}>
							<h2 className="todo-item">{element.name}</h2>
							<button onClick={() => deleteItem(element.id)}>
								Delete
							</button>
							<button onClick={() => editItem(element.id)}>
								Edit
							</button>
						</div>
					);
				})}
			</div>
			<button id="remove-button" onClick={removeAllItems}>
				Remove All
			</button>
		</div>
	);
}
