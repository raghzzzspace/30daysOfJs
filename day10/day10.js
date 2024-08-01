// Basic Event Handling

//Task 1 Add a click event listener to a button that changes the text content of a paragraph
let c=document.getElementById('change');
document.getElementById('button1').addEventListener('click',function(){c.innerHTML='Changed'});

//Task 2 Add a double click event listener to an image that toggles its visibility
let cc=0;
let i=document.getElementById('toggle');
document.getElementById('button2').addEventListener('dblclick',function(){
    if (cc%2==0)
    {
        i.style.visibility='hidden';
    }
    else
    {
        i.style.visibility='visible';
    }
    cc+=1;
});

// Activity 2 Mouse Events

//Task3 Add a mouseover event listener to an element that changes its background color
document.getElementById('change2').addEventListener('mouseover',function(){
    this.style.backgroundColor='blue';
})

//Task4 Add a mouseover event listener to an element that resets its background color
document.getElementById('change2').addEventListener('mouseover',function(){
    if (this.style.backgroundColor=='blue')
    {
        this.style.backgroundColor='white';
    }
})

// Activity 3 Keyboard Events

//Task5 Add a keydown event listener to an input field that logs the key pressed to the console
document.getElementById('name').addEventListener("keydown",function(event){
    console.log(event.key);
});

//Task6 Add a keyup event listener to an input field that displays the current value in a paragraph
document.getElementById('hey').addEventListener("keyup", function() {
    document.getElementById('display').textContent = document.getElementById('hey').value;
});

// Activity 4 Form Events

//Task7 Add a submit event listener to a form that prevents the default submission and logs the form data to the console
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let formData = new FormData(this);

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});

//Task8 Add a change event listener to a select dropdown that displays the selected value in a paragraph
document.getElementById('dropdown').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = 'Selected value: ' + this.value;
});

// Activity 5 Event Delegation

//Task9 Add a click event listener to a list that logs the text content of the clicked item using event delegation
document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Clicked item text:', event.target.textContent);
    }
});

//Task10 Add an event listener to a parent element that listens for events from dynamically added child elements
// Function to add a new list item dynamically
function addItem() {
    let itemList = document.getElementById('itemList2');
    let newItem = document.createElement('li');
    newItem.textContent = 'Item ' + (itemList.children.length + 1);
    itemList.appendChild(newItem);
}

// Add a click event listener to the parent <ul> element
document.getElementById('itemList2').addEventListener('click', function(event) {
    // Check if the clicked element is an <li> (list item)
    if (event.target && event.target.nodeName === 'LI') {
        // Log the text content of the clicked item
        console.log('Clicked item text:', event.target.textContent);
    }
});

// Add a click event listener to the "Add Item" button
document.getElementById('addItem').addEventListener('click', addItem);