const createPerson = function(name, age){
    const person = {
        personName: name, 
        personAge: age
    }

    return person
}

createPerson("Elon", 42)
console.log(person)

const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}
const math = mathOperations()
console.log(math(1,2))

const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
 
  const baz = foo() //out here, x doesn't exist
  baz()
  const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
   increment()//but when 
   increment()


   const family = function () {
       let members = []
       let birth = function(name) {
           members.push(name)
           console.log(members);
       } 
       return birth 
   }
   const giveBirth = family()
   giveBirth('natali')
   giveBirth('dima')
   giveBirth('john')

   const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}
const m = mathOperations()
m.add(13, 29)
m.mult(1.75, 24)
m.mult(7, m.div(36, 6))



//exercise 1
const StringFormatter = function() {
    const capitalizeFirst = function(text) {
        return text.charAt(0).toUpperCase()+ text.substr(1).toLowerCase()
    }
    const skewerCase = function(text) {
        return text.replace(' ', '-')
    }
return {
  capitalizeFirst,
  skewerCase
  }
}
const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

// Exercise 2

const Bank = function() {
    let money = 500
    const depositCash = function (cash) {
        return money += cash
    }
    const checkBalance = function () {
    console.log(money); 
    }
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Exercise 3
const SongsManager = function () {
    const _songs = {}
    const _youtubeBase = "https://www.youtube.com/watch?v="

    //assumes the given URL is in the form of https://www.youtube.com/watch?v=kJQP7kiw5Fk
    const _extractIdentifier = url => url.split("").splice(32).join("")
    const _getUrl = identifier => _youtubeBase + identifier

    const addSong = (name, url) => _songs[name] = _extractIdentifier(url)
    const getSong = name => console.log(_getUrl(_songs[name]))

    return {
        addSong: addSong,
        getSong: getSong
    }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") 