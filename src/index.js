import "./styles.css";

import {homePage} from "./home";
import { menu } from "./menu";
import { contact}from "./contact";

homePage();

function navController(){
    const content = document.getElementById("content");

    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click', ()=>{
        content.innerHTML=''
        homePage()
        return(homeButton)
    })


    const menuButton = document.getElementById("menu")
    menuButton.addEventListener('click', ()=>{
        content.innerHTML=''
        menu();
        return (menuButton)
    })

    const contactButton = document.getElementById("contact");
    contactButton.addEventListener('click', ()=>{
        content.innerHTML=''   
        contact();
    })
}
navController();

