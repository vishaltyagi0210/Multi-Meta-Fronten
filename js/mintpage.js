import { ethers } from "./ethers.min.js";
import MultiMeta from "../assets/MultiMeta.json" assert { type: "json" };

// D-objects
const mint_btn = document.getElementById('mint-button');
const connect_btn = document.getElementById('click-me');
let radioButton = document.querySelectorAll("input[type='radio']");

// mint amount
const MultiMetaAddress = "0x5B751e16a740F22902B0375C3C947540C5D7086A";
const mintAmount = 1;


window.addEventListener('load', (e)=>{
    if(ethereum.selectedAddress){
        connect_btn.innerHTML = 'Connected';
    }
});


btn.addEventListener('click',() =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})