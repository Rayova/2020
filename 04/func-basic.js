let secondname = "Иванов"

function logUser() {
  let name = "Иван"
  console.log(name + "" + secondname)
}

logUser()
console.log("secondname:" + secondname)
console.log("name:" + name)

function getfullname(name, secondname) {
  return `ИФ: ${name} ${secondname}`
}
console.log(getfullname("Mark", "Markov"))
let leofullname = getfullname("Leonard" "The Cat")
console.log(leofullname)

function sayhello(name) {
 if (name === undefined) {
   name = "stranger"
 }
name = name || "stranger"

  alert(`Hello ${name}!`)

}


function makecoffee(cups, withmilk) {
  if (withmilk) {
    return console.log(`Make ${cups} coffee with milk...`);
  }
  return console.log(`Make ${cups} coffee without`);
}

// show
function findMax() {
  if (a > b) {
  console.log("a");
}
  if (a < b) {
    console.log("b");
  }
  if (a=b) {
    console.log("equal")
  }
}
