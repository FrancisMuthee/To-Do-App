(() => {
//State variables
let toDoListArray = [];

//ui variables
const form = document.querySelector(".form")
const input = form.querySelector(".form_input")
const ul = document.querySelector(".toDoList")


//Event Listeners
form.addEventListener("submit", (e) => {
    //prevent default behaviour - page reload
    e.preventDefault();
    //Give item a unique Id
    var itemId = String(Date.now());
    //Assign input value
    let toDoItem = input.value;
    //Pass Id and item into functions
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    //Clear the input box
    input.value = "";
    });


ul.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data_id");
    if (!id) return;
    removeItemFromDOM(id);
    removeItemFromArray(id);
});

//Functions
function addItemToDOM(itemId, toDoItem) {
    //Create a li
    const li = document.createElement("li");
    li.setAttribute("data_id", itemId);
    //add toDoItem text ti li
    li.innerText = toDoItem;
    //Add li to the DOM
    ul.appendChild(li);
}

function addItemToArray (itemId, toDoItem){
    //add item to array as an object ti find and delete later.
    toDoListArray.push({itemId, toDoItem});
    console.log(toDoListArray)
}


function removeItemFromDOM(id){
    //get the list item by dsata id
    var li = document.querySelector('[data-id="' + id + '"]');
    //remove list item
    ul.removeChild(li);
}

function removeItemFromArray(id){
    //crete a new toDOListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray)
}
})();