function loginRedirect(){
    window.location.href="./login.html"
    
}

function dataRedirect(){
let token = JSON.parse(localStorage.getItem("dogtoken")) 
if(token){

    window.location.href="./data.html"
}else{
    window.location.href="./login.html"
}
}

function reportRedirect(){

    let token = JSON.parse(localStorage.getItem("dogtoken")) 
if(token){

    window.location.href="./reports.html"
}else{
    window.location.href="./login.html"
}

}



function getdata(){

    fetch('https://mock5dogdata.herokuapp.com/dogs')
  .then((response) => response.json())
  .then((data) => displayData(data));

}

window.onload =()=>{
    getdata()
}

// "id": 1,
//     "name": "Cherry",
//     "age": 2,
//     "place": "Visakhapatnam",
//     "gender": "Male"
//     },


function displayData(data){
    // console.log(data)
    document.querySelector(".dataContainer").innerHTML=""
    data.map(item =>{
   
        div = document.createElement("div")
        img = document.createElement("img")
        img.src ="https://hips.hearstapps.com/vidthumb/images/gettyimages-155696335-1619709287.jpg?crop=1.00xw%3A0.376xh%3B0%2C0.225xh&resize=480%3A270"
        h3 = document.createElement("h3")
        h3.innerText= item.name
        p1 = document.createElement("p")
        p1.innerText= item.age
        p2 = document.createElement("p")
        p2.innerText= item.place
        p3 = document.createElement("p")
        p3.innerText= item.gender
         btn2 = document.createElement("button")
        btn2.setAttribute("id", "vac")
        btn2.innerText="Delete"
        btn2.addEventListener("click" ,function(){
            myfunction2(item)
        })

        var btn1 = document.createElement("button")
        btn1.setAttribute("id", "vac")
        btn1.innerText="Edit"
        btn1.addEventListener("click" ,function(){
            myfunction1(el,index)
        })
  div.append(img,h3,p1,p2,p3,btn1,btn2)

  document.querySelector(".dataContainer").append(div)

    })

}


function myfunction2(el){

    fetch(`https://mock5dogdata.herokuapp.com/dogs/${el.id}`, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res =>     getdata())

}







function SortByAge(){
    
   let val =  document.querySelector("#sortAge").value
//    console.log(val)
   fetch(`https://mock5dogdata.herokuapp.com/dogs?_sort=age&_order=${val}`)
  .then((response) => response.json())
  .then((data) => displayData(data));

}


function SortByGender(){

   let val =  document.querySelector("#sortGender").value
//    console.log(val)
   fetch(`https://mock5dogdata.herokuapp.com/dogs?gender=${val}`)
   .then((response) => response.json())
   .then((data) => displayData(data));
}

document.getElementById("searchByName").onchange = function() {
    searchName()
  };

function searchName(){

    let val =  document.querySelector("#searchByName").value
       console.log(val)


       fetch(`https://mock5dogdata.herokuapp.com/dogs`)
       .then((response) => response.json())
       .then((data) => displayData(data));

}