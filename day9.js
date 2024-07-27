// Activity 1 Selecting and Manipulating Elements

//Task 1 Select an HTML Element by its ID and change its text content
document.getElementById('name').innerHTML='Hi i am esha';

//Task 2 Select an HTML Element by its class and change its backgroundcolor
let coll=document.getElementsByClassName('age');
for(let i=0;i<coll.length;i++)
{
    coll[i].style.backgroundColor='blue';
}

// Activity 2 Creating and Appending Elements

//Task 3 Create a new div element with some text content and append it to the body
let divel=document.createElement('div');
divel.textContent='How are you?'
let ulist = document.getElementById('ulist');
document.body.insertBefore(divel, ulist);

//Task 4 Create a new li element and add it to an existing ul list
let liel=document.createElement('li');
liel.innerHTML='Mango';
document.getElementById('ulist').appendChild(liel);
document.getElementById('ulist').innerHTML+='<li>Orange</li>';
document.getElementById('ulist').innerHTML+='<li>Banana</li>';

// Activity 3 Removing Elements

//Task 5 Select an HTML element and remove it from dom
let wish=document.getElementById('wish');
document.body.removeChild(wish);

//Task 6 Remove the last child of a specific HTML element
let remel=document.getElementById('ulist').lastChild;
document.getElementById('ulist').removeChild(remel);

// Activity 4 Modifying Attributes and Classes

//Task 7 Select an HTML Element and change one of its attributes 
document.getElementById('name').style.color='green';

//Task 8 Add and remove a CSS class to/from an HTML Element
document.getElementById('name').classList.add('new-class');
document.getElementById('name').classList.remove('new-class');

//Activity 5 Event Handling

//Task 9 Add a click event listener to a button that changes the text content of a paragraph
let c=document.getElementById('change');
document.getElementById('button1').addEventListener('click',function(){c.innerHTML='Changed'});

//Task 10 Add a mouseover event listener to an element that changes its border color
document.getElementById('change2').addEventListener('mouseover',function(){
    this.style.border='2px solid blue';
})
