let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button');
let hearts=Array.from(document.querySelector("#heart"))
var totlas=document.querySelector('#total_display');
btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});
totlas.forEach((btn) => {btn.addEventListener('click', somme)});


function increaseQuantity(){
    this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1 ;
    subtotal(this);

}
function decreaseQuantity(){
    if( this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
        subtotal(this) 
    }
    
}
function subtotal(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qty = parseInt(elt.previousElementSibling.value);
    let subt = price*qty;

    elt.parentElement.nextElementSibling.nextElementSibling.innerText = subt + ' DT';
}
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('src') == "heartNull.png")
        hearts[i].setAttribute('src','heartLike.png');
        else
        hearts[i].setAttribute('src','heartNull.png');
    });
}
function somme(){
    totlas += subt
}