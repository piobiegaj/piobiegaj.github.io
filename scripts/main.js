let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/20617091_1543709349020993_8778861683295754649_o.jpg') {
        myImage.setAttribute ('src','images/11244571_586201048216279_2064302669781150428_n.jpg');
    } else {
        myImage.setAttribute ('src','images/20617091_1543709349020993_8778861683295754649_o.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name')
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name',myName)
        myHeading.textContent = 'Serwus, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Serwus, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}