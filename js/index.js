const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('nav-option');
const connect_wallet_button = document.getElementById('connect-wallet');


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