const input = document.getElementById("input");
const addButton = document.getElementById("add-to-list");
const toDoList = document.querySelector(".to-do-list__container")

// const getNameInput = (event) => {
//     const newName = input.value;
//     console.log(newName);
//     document.querySelector(".title").innerHTML = "Welcome Back " + newName;

// }
// console.log("its working")

// input.addEventListener("input", getNameInput);

// input.addEventListener("keyup", function(event) {
//   if (e === 13) {
//    event.preventDefault();
//    input.value = " ";
//   }
// });

const addToDo = () => {
    const newItem = input.value;
   
    console.log(newItem)
    const newListItem = document.createElement("div");
    newListItem.classList.add("item");
    toDoList.appendChild(newListItem);

    newListItem.innerHTML = `${newItem}`;
}

addButton.addEventListener("click", addToDo);