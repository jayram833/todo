"use strict";

const btnAdd = document.querySelector(".btn_add");
const taskItem = document.querySelector(".task_item");
const taskText = document.querySelector(".task");
const inputBoxText = document.querySelector(".text");

taskItem.innerHTML = "";

// function to add & delete task
const addTask = function () {
  const inputText = document.querySelector(".text");
  if (!inputText.value) {
    alert("Enter some text!!");
  } else {
    taskItem.insertAdjacentHTML(
      "beforeend",
      `<div class="task_item">
          <span class="task">${inputText.value}</span>
          <button class="btn_delete">X</button><hr>
        </div>`
    );
    document.querySelector(".text").value = "";
    const txt = document.querySelector(".task").textContent;

    const currentTask = document.querySelectorAll(".btn_delete");

    for (let i = 0; i < currentTask.length; i++) {
      currentTask[i].addEventListener("click", function () {
        currentTask[i].parentNode.remove();
      });
    }
  }
};

btnAdd.addEventListener("click", addTask);
