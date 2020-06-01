//Dom elements


const time= document.getElementById('time'),
greeting=document.getElementById("greeting"),
name=document.getElementById("name"),
focus=document.getElementById("focus");


//show time 

function showTime() {
  let today=new Date(),
  hour=today.getHours(),
  min=today.getMinutes(),
  sec=today.getSeconds();


//Set Am or Pm
const amPm=hour >= 12 ? "PM" : "AM";

// 12hr Format
hour=hour % 12 || 12;


//Output Time

time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${amPm}`;

setTimeout(showTime,1000);

}


//Add zeros
function addZero(n) {
  return (parseInt(n,10) <10 ? '0' :'')+n;
}



//Set Background greeting
function setBg() {
  let today=new Date(),
  hour=today.getHours();


  if (hour < 12){
    //morning
    document.body.style.background="url('../img/goodmorgem.jfif')";
    greeting.textContent="Good Morning";
  } else if (hour < 18) {
    //Aternoon
    document.body.style.background="url('../img/goodafter.jfif')";
    greeting.textContent="Good Afternoon";
  } else {
    //night
    document.body.style.background="url('../img/goodnight.jfif')";
    greeting.textContent="Good Evening";
    document.body.style.color="white";

  }
}


//Get name 

function getName() {
  if(localStorage.getItem("name")=== null) {
    name.textContent="[Enter Name]";
  } else {
    name.textContent=localStorage.getItem('name');
  }
}

//set Name

function setName(e) {
  if(e.type=== "keypress") {
    //Make sure enter is pressed
    if(e.which==13 || e.keyCode ==13) {
      localStorage.setItem("name",e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name",e.target.innerText);
  }
}


//Set focus

function setFocus(e) {
  if(e.type=== "keypress") {
    //Make sure enter is pressed
    if(e.which==13 || e.keyCode ==13) {
      localStorage.setItem("focus",e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus",e.target.innerText);
  }
}

//Get Focus
function getFocue() {
  if(localStorage.getItem("focus")=== null) {
    focus.textContent="[Enter Focus]";
  } else {
    focus.textContent=localStorage.getItem('focus');
  }
}



name.addEventListener("keypress",setName);
name.addEventListener('blur',setName);

focus.addEventListener("keypress",setFocus);
focus.addEventListener('blur',setFocus);

//Run
showTime();
setBg();
getName();
getFocue();