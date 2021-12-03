const bodyArr = ["bald", "hairy", "slimy"];
const colorArr = ["green", 'blue', 'pink', 'red', 'yellow'];
const moodArr = ['happy', 'sleepy', 'angry', 'sad'];

function generator (arr1, arr2, arr3) {
     let newBody = arrayRandomizer(arr1)
     let newColor = arrayRandomizer(arr2)
     let newMood = arrayRandomizer(arr3)

     document.write(`Your monster is ${newBody}, ${newColor}, and ${newMood}!`);
     
 }


function arrayNumberRandomizer(array) {
     return Math.floor((Math.random() * array.length));
 }

function arrayRandomizer(array) {
     return array[arrayNumberRandomizer(array)]
 }

 function myFunction () {
 document.write("welcome to Javatpoint"); 
 }