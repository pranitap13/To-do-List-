
const  inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value ===''){
    alert("You must write something!");
  }
  else{
    let li= document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    //to create x icon
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
    inputBox.value = "";
    saveData(); //everytime after adding new task it will get called
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){ //it will check where we have clicked
    e.target.classList.toggle("checked"); //it will add checked class and if it's already present it will remove it
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove(); //if we have click span it will remove parentElement, here parent element is li
   saveData(); //after deleting a task it will also show data
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
  //it will give all content stored in browser with the name data
}
showTask();