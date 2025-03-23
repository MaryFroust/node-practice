// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
 // const getInput = require("./get-input.js");
 // const str = ("Hello, World")
 // const firstLetter = str[0]
 // const second =str [1]
 // console.log(firstLetter + second)
 // console.log(str.toUpperCase())
 //caps the str "hello world"
 const getInput = require("./get-input.js")
 const firstName = getInput (1)
 const lastName = getInput (2)

 console.log("Hey! " + firstName + " " + lastName)

 console.log(firstName.toUpperCase() + " " + lastName.toUpperCase() + " " + 'is trying to figure this out!') 

  //const str = ("mary froust")
  //const firstLetter = str[0]
  //const second = str[5]
  //console.log(firstLetter.toUpperCase() + '.' + " " + second.toUpperCase() + '.' + " " + 'is trying to figure this out!')

  console.log(firstName.toUpperCase()[0] + '.' + " " + lastName.toUpperCase()[0] + '.' + " " + 'is trying to figure this out!')

  //const email = ("mfroust.prsvr@gmail.com")
  console.log(firstName[0] + lastName + ".prsvr@gmail.com")