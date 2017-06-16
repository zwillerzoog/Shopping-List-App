//add items with the add item button and return key
//when check is clicked toggle the line-through class 
//when delete is clicked remove the whole div

//1. Design State

let appState = {
	index: 0,
	items: []
};

//2. State Modifier Functions

	//Add a shopping list item

	function addListItem(state, listItem) {
		state.items.push({
			name: listItem, 
			checked: false
		});

		// run new render 
	}
	addListItem(appState, "oranges");
	console.log(appState);
	//Toggleclass for .shopping-item__checked 

	function checkToggle() {
		$('button.shopping-item-toggle').click(
			function(event) {
				$(event.target).closest('li').children('span').toggleClass('shopping-item__checked');
			}
		);
	}
	checkToggle();

	//Somehow delete the whole food div

	function deleteItem(state, item) {
		//const targetIndex = state.items.indexOf(item);
		let currentItem = ;
		state.items.splice(currentItem, 1);

		//splice(targetIndex, 1);
	}
	function handleItemDeletes(listElem, itemElem){
		// does the list elem have a length?
		// can you use that to find the item at the same
		// position in the state?
	}

	// separation of concerns

	// const item1 = {
	// 	name: 'apple', 
	// 	checked: false
	// }
	// const item2 = {
	// 	name: 'apple', 
	// 	checked: false
	// }

	// // console.log(item1===item2)

	// const testArr = [item2];
	// console.log(testArr.indexOf(item1))



	//Find the value for the text input

//3. Render Functions

	//Function(s) that happen when you clicked

//4. Event listener

	//Add item click function (with button and return key)

	//Check click function

	//Delete function