"use strict";
//1
const form = document.forms.todoList;
const { todoItem } = form;
const errorMessage = document.querySelector(".errorMessage");
const todoItemValue = document.getElementById("todoItemValue");
const addBtn = document.getElementById("addBtn");
const listNode = document.getElementById("list");

const isEmptyField = (field) => {
  return field.value.trim().length === 0;
};
form.onsubmit = (event) => {
  event.preventDefault();
  if (isEmptyField(todoItem)) {
    todoItem.classList.add("error");
    errorMessage.innerHTML = "Please, enter valid nickname";
      return;
    }
}

todoItem.oninput = () => {
  const isErrorField = todoItem.classList.contains("error");
  if (isErrorField) {
    todoItem.classList.remove("error");
    errorMessage.innerHTML = "";
  }
};

addBtn.addEventListener("click", submitForm);

function submitForm() {
  if (isEmptyField(todoItem)) {
  }
 else {
  const inputValue = todoItemValue.value;
  const listItemNode = document.createElement('li');
  const itemButtonNode = document.createElement('button');
  itemButtonNode.classList.add("remove-button");
  listItemNode.classList.add("listItem");
  listItemNode.innerHTML = inputValue;
  itemButtonNode.innerHTML = "delete";
  listItemNode.append(itemButtonNode);
  listNode.append(listItemNode);
  todoItemValue.value = "";
 }

}

listNode.addEventListener("click", (event) => {
  const isRemoveButton = event.target.className === "remove-button";
  if (isRemoveButton) {
    const removeButton = event.target;
    const listTitleBlock = removeButton.closest(".listItem");
    listTitleBlock.remove();
  }
});