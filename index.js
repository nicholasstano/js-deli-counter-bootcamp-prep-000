function takeANumber(line, name) {
  //creates a function that includes a line of people and name.
  line.push(name) 
  //takes the name and adds that person to the end of the line.
  return `Welcome, ${name}. You are number ${line.length} in line.`
  //returns a welcome message greeting the newest person on line and giving them their numbered spot in line.  
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
    //checks to see the length of line is empty.  If so it returns the message.
  }
  var person = []
  person = line.shift()
  //creates the person that is being taken from the from of the line who is being served.  Removes that person from the line and stores it in the person array.  
  return `Currently serving ${person}.`
  //returns the name of the person being served who was shifted from the line. (one time, not loop)
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  //checks to see the length of the line is empty.  If so it returns the message above.
  var names = []
  //names array will store the number and name of which is line to display it.  EX: [1. Ada, 2. Bart, 3. Cat]
  for (var i = 0; i < line.length; i++) {
    names.push(`${i + 1}. ${line[i]}`)
    //adds the names and numbers to the names array.
  }
  return `The line is currently: ${names.join(', ')}`
  //uses join command to separate the names with a comma.
}

/*function takeANumber(line, name) {
  line.push(name) 
  //takes line of people, line = ["A", "B", "C"] and changes the array to line = ["A", "B", "C", name] by adding the name to the end of the line changing the array in the process.  
  return `Welcome, ${name}. You are number ${line.length} in line.`
  //returns a message that welcomes this person who was added to the line and tells them their place in line by pulling the length of the line. If they are the sixth person in line, the line.length === 6. 
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  //checks to see if the array is empty, line = [] and returns the message.
  var person = line.shift() 
  //this variable is the person who is taken off the line so they can be returned as the person in the next line.  line = ["A", "B", "C"] would be line = ["B", "C"] once the person is served.
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  
  const list = []
  //creates a list to store the numbers and name (1. Timmy, 2. Jerome)
  for (var i = 0; i < line.length; i++) {
  list.push(`${i + 1}. ${line[i]}`)  
  //adds (1. Timmy, 2. Jerome) to [] for every person in line = [Timmy, Jerome, Etc] by using the loop to pair each person with their appropriate spot in line from the index, i.
}
return `The line is currently: ${list.join(", ")}`
//returns the list = ["1. Timmy", "2. Jerome", "3. Fred"] seperated by a comma thanks to join, after the next 'the line is currently:'
}
*/

/* function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var person = []
  person = line.shift()
  return `Currently serving ${person}.`
}
function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var namesNums = []
  for (var i = 0; i < line.length; i++) {
  namesNums.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${namesNums.join(', ')}`
} */

/* function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var array = []
  array = line.shift()
  return `Currently serving ${array}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var namesInLine = []
  for (var i = 0; i < line.length; i++) {
    namesInLine.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${namesInLine.join(', ')}`
} */

/* function takeANumber(line, name) {
  line.push(name) 
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var serving = []
  serving = line.shift() 
  return `Currently serving ${serving}.`
}

function currentLine(line) {
  if (line.length === 0) {
  return `The line is currently empty.`
  }
  var spotInLine = []
  for (var i = 0; i < line.length; i++) {
  spotInLine.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${spotInLine.join(', ')}`
}
*/

/* function takeANumber(line, name) {
  line.push(name) 
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var servingLine = []
  servingLine = line.shift() 
  return `Currently serving ${servingLine}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var array = []
  for (var i = 0; i < line.length; i++) {
  
  array.push(`${i + 1}. ${line[i]}`)
  
  }
 return `The line is currently: ${array.join(', ')}`
}

*/

/* function takeANumber(line, name) {
  line.push(name) 
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var servingPerson = []
  servingPerson = line.shift() 
  return `Currently serving ${servingPerson}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var array = []
  for (var i = 0; i < line.length; i++) {
    array.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${array.join(', ')}`
}
*/

/* function takeANumber(line, name) {
  line.push(name) 
  return `Welcome, ${name}. You are number ${line.length} in line.` 
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var person = []
  person = line.shift() 
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
var spot = [] 
for (var i = 0; i < line.length; i++) {
  spot.push(`${i + 1}. ${line[i]}`)
  
  }
  return `The line is currently: ${spot.join(', ')}`
}

*/