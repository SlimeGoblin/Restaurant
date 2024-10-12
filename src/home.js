//import images with import odinIMage from "./odin.png"

function homePage(){
    const contentDOM = document.getElementById("content")
//create background image





//home Container
const homeContainer = document.createElement("div")
homeContainer.classList.add("homeContainer")
contentDOM.appendChild(homeContainer)


const daBox = document.createElement("div")
daBox.classList.add("homeCenterBox")


//daBox elements (Title, Text, Button)

//Title
const daBoxTitle = document.createElement("div");
daBoxTitle.classList.add("daBoxTitle")
daBoxTitle.textContent="Big Protien"
daBox.appendChild(daBoxTitle)

//Text
const daBoxText = document.createElement("div");
daBoxText.classList.add("daBoxText");
daBoxText.textContent= "Welcome to Big Protien — a cozy home restaurant where every evening becomes a culinary adventure! We offer exquisite dishes that blend tradition with modern trends to surprise you with unique flavors!"
daBox.appendChild(daBoxText)

const daBoxBtn = document.createElement("button");
daBoxBtn.classList.add("daBoxButton");
daBoxBtn.textContent = "Order Now";
daBox.appendChild(daBoxBtn)


homeContainer.appendChild(daBox)


}
export { homePage}
