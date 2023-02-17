import { ethers } from "./ethers.min.js";
import MultiMeta from "../assets/MultiMeta.json" assert { type: "json" };

// D-objects
const mint_btn = document.getElementById('mint-button');
const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('nav-option');
const connect_wallet_button = document.getElementById('connect-wallet');
let radioButton = document.querySelectorAll("input[type='radio']");
let paymentMethod;

// contract address
const MultiMetaAddress = "0x5B751e16a740F22902B0375C3C947540C5D7086A";
// mint amount
const mintAmount = 1;

// metamask connection dectector.
window.addEventListener('load', (e)=>{
    if(ethereum.selectedAddress){
        connect_wallet_button.innerHTML = 'Connected';
    }
});


// toggle menu
hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// for radios.
radioButton.forEach(element => {
    element.addEventListener('change', (e)=>{
        if (e.target.value === 'fiat'){
            //put the code for cross-mint for payment from credit-card.
            paymentMethod = 'fiat';
            console.log("Payment method is " + paymentMethod);
        } else if(e.target.value === 'crypto'){
            //put code for metamask.
            paymentMethod = 'crypto';
            console.log("Payment method is " + paymentMethod);
        }
    });
});

// metamask.
connect_wallet_button.addEventListener('click', async ()=>{
    if(typeof window.ethereum !== 'undefined' && ethereum.isMetaMask){
        let accounts;
        try {
            accounts = await window.ethereum.request({method: "eth_requestAccounts"});
            console.log(accounts[0]);
        } catch (error) {
            throw new Error(error);
        }
        if(accounts){
            connect_wallet_button.innerHTML = 'Connected';
        }
        }
    else{
        // prompt user to install metamask.
        alert('Install metamask');
    }
    });
    ethereum.on('accountsChanged', ()=>{
        connect_wallet_button.innerText = 'Connect wallet';
        console.log('i am out');
    })

// minting functions yet to be completed........
mint_btn.addEventListener('click', async ()=>{
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const MultiMetaContract = new ethers.Contract(MultiMetaAddress , MultiMeta.abi , signer);
        
        try{
            const response = await MultiMetaContract.mint(mintAmount, {value: ethers.utils.parseEther((0.12 * mintAmount).toString())})
        }catch(e){
            alert(e.error.message);
            // console.log(error.code);
            // console.log(e.error.message);
            // console.error(e);
            // console.log(typeof e);
            // alert(extractErrorMessage(error.data));
            // console.error(error);
            // check for the revert reason in the error message
            // if (err.message.includes("revert")) {
            //     let revertMessage = err.message.split("revert")[1].trim()
            //     console.log("Revert reason:", revertMessage)
            // }
        }
    }
})




(error={"code":-32000,"message":"err: insufficient funds for gas * price + value: address 0xCD4B748ccA60fC0572669b443116Aa82ED2EB5b1 have 109432739395631202 want 120000000000000000 (supplied gas 15010499)"})