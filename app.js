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

	

//Somehow delete the whole food div

	//function deleteItem(state, item) {
		//const targetIndex = state.items.indexOf(item);
		//let currentItem = ;
	//	state.items.splice(currentItem, 1);

		//splice(targetIndex, 1);
	//}

	//function handleItemDeletes(listElem, itemElem){
		// does the list elem have a length?
		// can you use that to find the item at the same
		// position in the state?
	//}

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

	function addItem() {
		$("#js-shopping-list-form").submit(function(event) {
			event.preventDefault();
			let findText = $(event.currentTarget).find("#shopping-list-entry").val();
			$("ul").append(`<li><span class='shopping-item'>${findText}</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>`);
		});
	}



//3. Render Functions

//Function(s) that happen when you clicked

//4. Event listener

//Add item click function (with button and return key)

	// function addItem() {
	// 	let addButton = $("#js-shopping-list-form").children("button");
	// 	let textInput = inputValue();
	// 	let html1 = `<li><span class='shopping-item'>`
	// 	let html2 = `</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>`
	// 	addButton.click(function(event){
	// 		$("ul").append(html1 + textInput + html2);
	// 	})
	// 		console.log("Dude, you want something sent?")
	// 		console.log(addButton);
	// }

	// console.log(addItem());
	// console.log(inputValue());

	// function addItem() {
	// 	let addButton = $("#js-shopping-list-form").children("button");
	// 	addButton.click(function(event){
	// 		console.log()
	// });
	// }

	

//Check click function

	function checkToggle() {
		$('.shopping-list').on("click", ".shopping-item-toggle",
			function(event) {
				$(event.target).closest('li').children('span').toggleClass('shopping-item__checked');
			}
		);
	}

	
	
//Delete function

	function deleteItem() {
		$(".shopping-list").on("click", ".shopping-item-delete",
			function(event) {
			$(event.currentTarget).closest("li").remove();
			console.log("hey bud");
		})
	}

$(document).ready(function() {
	
	deleteItem();
	checkToggle();
	addItem();
});













