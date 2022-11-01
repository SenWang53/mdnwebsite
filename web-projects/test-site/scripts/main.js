// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/dongxiangmeimei.jpeg') {
    myImage.setAttribute ('src','images/gaomu.jpg');
  } else {
    myImage.setAttribute ('src','images/dongxiangmeimei.jpeg');
  }
}

// button
let myButton  = document.querySelector('button');
let myHeading = document.querySelector('hl');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'user: ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'user: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
