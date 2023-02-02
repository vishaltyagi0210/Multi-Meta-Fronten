import { ethers } from "./ethers.min.js";
import MultiMeta from "../assets/MultiMeta.json" assert { type: "json" };

const mint_btn = document.getElementById('mint-button');
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const connect_btn = document.getElementById('click-me');
const MultiMetaAddress = "0x5B751e16a740F22902B0375C3C947540C5D7086A";
const Enter_Portal = document.getElementById('enter-portal');

// users address
const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
});

const mintAmount = 1;

//variables for identify that user is clicked on crypto or fiat option.
let radioButton = document.querySelectorAll("input[type='radio']");

//for payment
let paymentMethod;

window.addEventListener('load', (e)=>{
    if(ethereum.selectedAddress){
        connect_btn.innerHTML = 'Connected';
    }
});

// enter portal function 
// Enter_Portal.addEventListener('click' , async ()=>{
//     if(typeof window.ethereum !== 'undefined' && ethereum.isMetaMask){
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const MultiMetaContract = new ethers.Contract(MultiMetaAddress , MultiMeta.abi , signer);
//         try{
//             // by chat gpt
//                 // window.ethereum.enable().then(function (address) {
//                 //     console.log(address[0]);
//                 // });
//             // const response = await MultiMetaContract.balanceOf(signer.address);
//             // console.log(response);
//         }catch(error){
//             alert(error.message);
//             // console.error(error);
//             // check for the revert reason in the error message
//             // if (err.message.includes("revert")) {
//             //     let revertMessage = err.message.split("revert")[1].trim()
//             //     console.log("Revert reason:", revertMessage)
//             // }
//         }
//     }
// });

btn.addEventListener('click',() =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


connect_btn.addEventListener('click', async ()=>{
if(typeof window.ethereum !== 'undefined' && ethereum.isMetaMask){
    let accounts;
    try {
        accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        console.log(accounts[0]);
    } catch (error) {
        throw new Error(error);
    }
    if(accounts){
        connect_btn.innerHTML = 'Connected';
    }
    }
else{
    // prompt user to install metamask.
    alert('Install metamask');
}
});
ethereum.on('accountsChanged', ()=>{
    connect_btn.innerText = 'Connect wallet';
    console.log('i am out');
})


//adding event listener for payment gateway
radioButton.forEach(element => {
    element.addEventListener('change', (e)=>{
        if (e.target.value === 'fiat'){
            //put the code for cross-mint.
            paymentMethod = 'fiat';
            console.log("Payment method is " + paymentMethod);
        } else if(e.target.value === 'crypto'){
            //put code for metamask.
            paymentMethod = 'crypto';
            console.log("Payment method is " + paymentMethod);
        }
    });
});

mint_btn.addEventListener('click', async ()=>{
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const MultiMetaContract = new ethers.Contract(MultiMetaAddress , MultiMeta.abi , signer);
        
        try{
            const response = await MultiMetaContract.mint(mintAmount, {value: ethers.utils.parseEther((0.12 * mintAmount).toString())})
        }catch(error){
            alert(error);
            // console.error(error);
            // check for the revert reason in the error message
            // if (err.message.includes("revert")) {
            //     let revertMessage = err.message.split("revert")[1].trim()
            //     console.log("Revert reason:", revertMessage)
            // }
        }
    }
})

