const btn = document.querySelector('#btn-flag');
const txt = document.querySelector('#text-flag');

const actionBtn = ()=>{
    //Flag para ganar un punto en el parcial

    txt.innerHTML = 'Aquí no hay flag'

    alert('Vale por un punto extra en el parcial');
}

btn.addEventListener('click' , actionBtn);