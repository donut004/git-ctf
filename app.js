const btn = document.querySelector('#btn-flag');
const txt = document.querySelector('#text-flag');

const actionBtn = ()=>{
    //Flag para ganar un punto en el parcial
    alert('Vale por un punto extra en el parcial');
}

btn.addEventListener('click' , actionBtn);