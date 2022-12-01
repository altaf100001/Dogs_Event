document.querySelector("form").addEventListener("submit",registration)
// 1. Name of breed
// 2. Age of pet
// 3. Gender
// 4. Place
function registration(){
event.preventDefault()
let obj ={}
let name1 = document.querySelector("#name").value
let age = document.querySelector("#age").value
let gender = document.querySelector("#gender").value
let place = document.querySelector("#place").value

// {
//     "id": 1,
//     "name": "Cherry",
//     "age": 2,
//     "place": "Visakhapatnam",
//     "gender": "Male"
//     },

obj["name"] = name1
obj["age"] = age
obj["gender"] = gender
obj["place"] = place

fetch('https://apimockeradnanchicken.onrender.com/dogsEvent', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
})
.then((response) => response.json())
  .then((data) => {
    alert("Successfully registered")
  })
}