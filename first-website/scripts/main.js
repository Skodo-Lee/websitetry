const myImage = document.querySelector("img");

myImage.addEventListener("click", ()=>{
    const mySrc = myImage.getAttribute("src");

    if(mySrc === "images/Artist-Adebisi-Akanji-c.-Adunni-Olorisha-Trust-_-Osun-Foundationdd222.png"){
        myImage.setAttribute("src", "images/artworks-2zgUu6zTkxX3-0-t500x500.jpg");
       
    }else{
        myImage.setAttribute("src", "images/Artist-Adebisi-Akanji-c.-Adunni-Olorisha-Trust-_-Osun-Foundationdd222.png");
     
    }
});

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName(){
//     const myName = prompt("Please enter your name");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = 'Skodo is cool, ${myName}';
// }

// if(!localStorage.getItem("name")){
//     setUserName();
// }else{
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = 'Skodo is cool, ${myName}';
// }

// myButton.addEventListener("click", ()=>{
//     setUserName();
// }

// );

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (myName) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Skodo is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Skodo is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
