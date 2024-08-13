// Activity 1 Understanding LocalStorage

//Task1 Write a script to save a string value to localStorage and retrieve it. Log th retrieved value.

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');


const val="Raghvi";
localStorage.setItem("name",val);

console.log(localStorage.getItem("name"));
// Raghvi

//Task2 Write a script to save an object to localStorage by converting it to json string. Retrieve and parse the object and log it.

const obj={"name":'Raghvi',"age":25};
localStorage.setItem("data",JSON.stringify(obj));

const k=localStorage.getItem("data");
console.log(JSON.parse(k));

// { name: 'Raghvi', age: 25 }

// Activity 2 Using LocalStorage

//Task3 Create a simple form that saves user input (eg name and email) to local Storage when submitted. Retrieve and display the saved data on page load.

//refer html file

//Task4 Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log(localStorage);
localStorage.removeItem("name");
console.log(localStorage);
// LocalStorage {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     _location: 'C:\\Users\\hp\\Desktop\\gssoc\\30daysOfJs-1\\scratch',
//     quota: 5242880,
//     length: 2,
//     _bytesInUse: 32,
//     _keys: [ 'name', 'data' ],
//     _metaKeyMap: Map <[Object: null prototype] {}> {
//       name: MetaKey { key: 'name', index: 0, size: 6 },
//       data: MetaKey { key: 'data', index: 1, size: 26 }
//     },
//     _eventUrl: 'pid:20792',
//     _QUOTA_EXCEEDED_ERR: [class QUOTA_EXCEEDED_ERR extends Error],
//     [Symbol(shapeMode)]: false,
//     [Symbol(kCapture)]: false
//   }
//   LocalStorage {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     _location: 'C:\\Users\\hp\\Desktop\\gssoc\\30daysOfJs-1\\scratch',
//     quota: 5242880,
//     length: 1,
//     _bytesInUse: 26,
//     _keys: [ 'data' ],
//     _metaKeyMap: Map <[Object: null prototype] {}> {
//       data: MetaKey { key: 'data', index: 0, size: 26 }
//     },
//     _eventUrl: 'pid:20792',
//     _QUOTA_EXCEEDED_ERR: [class QUOTA_EXCEEDED_ERR extends Error],
//     [Symbol(shapeMode)]: false,
//     [Symbol(kCapture)]: false
//   }


// Activity 3 Understanding SessionStorage

//Task5 Write a script to save a string value to SessionStorage and retrieve it. Log th retrieved value.

//Raghvi

//refer html file

//Task6 Write a script to save an object to localStorage by converting it to json string. Retrieve and parse the object and log it.

//refer html file

//{name: 'Raghvi', age: 25}

// Activity 4 Using Session Storage

//Task7 Create a simple form that saves user input (eg name and email) to session Storage when submitted. Retrieve and display the saved data on page load.


//refer html file

//Task8 Write a script to remove an item from sessionStorage. Log the localStorage content before and after removal.

// Storage {name: 'Raghvi', data: '{"name":"Raghvi","age":25}', length: 2}
// day20.html:89 Storage {data: '{"name":"Raghvi","age":25}', length: 1}
// day20.html:90 removed

//refer html file

//Activity 5 Comparing localstorage and session storage

//Task9 Write a function that accepts a key value pair and saves the values to both local and session storage. Retrieve and log them.

//refer html file
// LocalStorage - Key: Key, Value: hi
// day20.html:107 SessionStorage - Key: Key, Value: hi

//Task10 Write a function that clears all data from both local and session storage. Verify both the storages are empty.

//refer html file
//Both localStorage and sessionStorage are empty.