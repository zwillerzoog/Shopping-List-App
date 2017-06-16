//add items with the add item button and return key
//when check is clicked toggle the line-through class 
//when delete is clicked remove the whole div

//1. Design State

const initialState = [];

//2. State Modifier Functions

	//Add a shopping list item

	// function addListItem(state, listItem) {
	// 	state.some-key = listItem;
	// }

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

	//Find the value for the text input

//3. Render Functions

	//Function(s) that happen when you clicked

//4. Event listener

	//Add item click function (with button and return key)

	//Check click function

	//Delete function





