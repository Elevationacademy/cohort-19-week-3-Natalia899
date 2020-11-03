//exercise 1
const push = function () {
    console.log("pushing it!")
  }
  const pull = function () {
    console.log("pulling it!")
  }
  const pushPull = function (callBack) {
      callBack()
  }
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"

 //exercise 2
 
  const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  const getTime = function () {
    const time = new Date()
    returnTime(time)
  }
  getTime(returnTime)
  
  //exercise 3

  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
    
  };
  const logData = function (data) {
    console.log(data);
  }
  
  displayData(alert, logData, "I like to party")

  //Exercise 4

  const sum = (a,b,c) => { return a+b+c }
  
  console.log(sum(1,2,3));

  //Exercise 5

  const capitalize = (word) => {
      return word.charAt(0).toUpperCase()+ word.substr(1).toLowerCase()
  }
  const myName = capitalize('natali')
  console.log(myName);

//Exercise 6

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }


const commentOnWeather = (temp) => { console.log('The water is ' + determineWeather(temp)); }
commentOnWeather(30)
commentOnWeather(22)

//Exercise 7

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")


 