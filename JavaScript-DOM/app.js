// # DOM Manipulation #
let val;

// ## document ##
val = document;
val = document.all[0];
val = document.all.length;

val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.contentType;

// ### document form ###
val = document.forms; //get element forms
val = document.forms[0].id; //get class/id form
val = document.forms[0].method; //get type method

// ### document links ###
val = document.links; //get all element a href
val = document.links[0]; //get element a href
val = document.links[0].className; // get clss in a href

// ### get document image ###
val = document.images

// ### get document script ###
val = document.scripts //get all script
val = document.scripts[1] //get script
val = document.scripts[1].getAttribute('src') //get link script

// #### list link script ####

let script= document.scripts;

let scriptArr = Array.from(script); //convert from HTMLCollection to array

scriptArr.forEach(function (script) {
    // console.log(script.getAttribute('src'));
})

// console.log(val);


// ## get Element By Id

console.log(document.getElementById('task-title')); //get element
console.log(document.getElementById('task-title').id); //get attribute id in element
console.log(document.getElementById('task-title').className); //get attribute class in element

const cardHeader = document.getElementById('task-title');
// ### Change style by id ###
cardHeader.style.background = 'black'; //change bg by id
cardHeader.style.color = 'white'; //change bg by id

// ### Change Content by id ###
cardHeader.textContent = 'Hello World'; //change Content by id
cardHeader.innerHTML = '<h2 style="text-align:center;">My Task</h2>'

// ## get Query Select, just take the first query ## 
console.log(document.querySelector('#task-title')); //get element

// ### Change style by Query ###
document.querySelector('li').style.color = 'red'; //take the first query;
document.querySelector('li:nth-child(2)').textContent = 'Hello World'; // take the quey as requested;

// ## get Class By Class Name ##

const items = document.getElementsByClassName('list-group-item');
items[2].style.color = "blue" 

// ## get Element By Tag Name ##
const buttom = document.getElementsByTagName('button');
buttom[1].style.color = "Blue"
console.log(buttom);

// ## get query selector all ##
const listLight = document.querySelectorAll('li:nth-child(odd'); //get all query odd

listLight.forEach(function (li, index) {
    li.style.background = '#ccc';
})
