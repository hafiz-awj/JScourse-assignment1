// Question 1

function addition (var1) {
    return function closureAddition (var2) {
        return var1 + var2;
    }
}
let firstNumber = +prompt("Enter first number");
let secondNumber = Math.round(Math.random() * 100);

let numberToBeAdded = addition(firstNumber);
let result = numberToBeAdded(secondNumber);

console.log(secondNumber);
console.log(result);

// Question 2

function find(array , valueToBeFounded) {
if (array.length === 0) {
    return false;
} else if (array[0] === valueToBeFounded) {
    return true;
} else {
    return find(array.slice(1),valueToBeFounded)
}
}

let givenArray = [Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10) , Math.round(Math.random() * 10)];
let valueToBeFounded = Math.round(Math.random() * 10);

if (find(givenArray , valueToBeFounded)) {
    console.log(true);
} else {
    console.log(false);
}

// Question 3

function createPara(comment) {
  let newPara = document.createElement("p");
  newPara.innerText = comment;
  document.body.appendChild(newPara);
}

// Question 4

function newItem(item) {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  let newList = document.querySelector("ul");
  newList.appendChild(listItem);
}

// Question 6

function save(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
  }
  let anObject = { name:"Ali Awj", age: 15 };
  save("anObject", anObject);

// Question 7

let inputObject = {name: "Ali", age: 15}
localStorage.setItem("key", JSON.stringify(inputObject));
function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

let outputObject = getLocal("key");
console.log(outputObject);

// Question 8

function setToGet(object) {
  localStorage.setItem("saved object", JSON.stringify(object));
  let getObject = JSON.parse(localStorage.getItem("saved object"));
  return getObject;
}
prevObject = { class: "Javascript", duration: "15 days" };
let getObject = setToGet(prevObject);
console.log(getObject);

//Question 5
let theElement = document.getElementById("bgColor");
function changeBg(element, bgColor) {
  element.style.setProperty("background-color", bgColor);
}

changeBg(theElement, "green");
