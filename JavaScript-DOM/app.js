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

// console.log(document.getElementById('task-title')); //get element
// console.log(document.getElementById('task-title').id); //get attribute id in element
// console.log(document.getElementById('task-title').className); //get attribute class in element

const cardHeader = document.getElementById('task-title');
// ### Change style by id ###
cardHeader.style.background = 'black'; //change bg by id
cardHeader.style.color = 'white'; //change bg by id

// ### Change Content by id ###
cardHeader.textContent = 'Hello World'; //change Content by id
cardHeader.innerHTML = '<h2 style="text-align:center;">My Task</h2>'

// ## get Query Select, just take the first query ## 
// console.log(document.querySelector('#task-title')); //get element

// ### Change style by Query ###
document.querySelector('li').style.color = 'red'; //take the first query;
document.querySelector('li:nth-child(2)').textContent = 'Hello World'; // take the quey as requested;

// ## get Class By Class Name ##

const items = document.getElementsByClassName('list-group-item');
items[2].style.color = "blue" 

// ## get Element By Tag Name ##
const buttom = document.getElementsByTagName('button');
buttom[1].style.color = "Blue"

// ## get query selector all ##
const listLight = document.querySelectorAll('li:nth-child(odd'); //get all query odd

listLight.forEach(function (li, index) {
    li.style.background = '#ccc';
})

// ## create new element ##
const li = document.createElement('li');

// add class
li.className = 'list-group-item d-flex flex-row-reverse justify-content-between';

// add id
li.id = 'new-item'

// add attribute
li.setAttribute('title', 'new item')

// add innerHTML
li.innerHTML = '<a href="/" class="btn btn-danger btn-sm delete-item">x</a>';

// Create append text node 
li.appendChild(document.createTextNode("This New Text"))

// execution new element
document.querySelector('ul.list-group').appendChild(li);

// ## Replace Element ## 

// Create element
const newHeading = document.createElement('h3');

// Add id
newHeading.id = 'task-title';

// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// get old element
const oldHeading = document.getElementById('card-title'); 
// get parent
const cardTitle = document.querySelector('.card-header');

// Replace
// cardTitle.replaceChild(newHeading, oldHeading);

// ## Remove Element ##
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// ## Class And Attribute

// Class
const firstLi = document.querySelector('li:first-child')
const button = firstLi.children[0];

let addClass;

addClass = button.className
addClass = button.classList

button.classList.add("test");
button.classList.remove("test");
addClass = button;

// Attribute

addAtt = button.setAttribute("type", 'submit')
addAtt = button.hasAttribute('type')
addAtt = button;


// # Event #
