import {add} from "./day13.js";
import { person } from "./day13.js";
import { hello1 } from "./day13.js";
import { hello2 } from "./day13.js";
import hello3 from "./day13.js";
import * as utility from "./day13.js";
const r=add(2,3);
console.log(r);
//5

console.log(person);
//{ name: 'Ram', age: 18, greet: [Function: greet] }

hello1();
hello2();
// hello1
// hello2

hello3();
// hello3

utility.hello4();
console.log(utility.a);
// hello4
// 3

import ll from 'lodash'
const object = { 'a': 1 };
const sources = { 'b': 2 };
const merged = ll.merge(object, sources);
console.log(merged); 
// { 'a': 1, 'b': 2 }

import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Data received successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Data received successfully

