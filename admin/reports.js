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




function displayData(data){
let len = data.length

let female = data.filter(el =>{
    if(el.gender == "Female"){
        return el
    }
})

let male = data.filter(el =>{

    // console.log(el.gender,"gendermale")
    if(el.gender == "Male"){
        return el
    }
})
let countfemale = female.length
let countmale = male.length

let ageSum = data.reduce((sum,a)=>{
    sum += Number(a.age)
    return sum
},0)

let avg = Math.floor(ageSum/data.length)


    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = len
    var td2 = document.createElement("td")
    td2.innerText = countfemale
    var td3 = document.createElement("td")
    td3.innerText = countmale
    var td4 = document.createElement("td")
    td4.innerText = avg

    tr.append(td1,td2,td3,td4)
    document.querySelector("tbody").append(tr)
}


