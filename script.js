const border = document.querySelector('.border');
const main = document.querySelector('main');
const Logo = document.querySelector('.img-logo');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const p5 = document.querySelector('#p5');
const p6 = document.querySelector('#p6');
const p7 = document.querySelector('#p7');
const p8 = document.querySelector('#p8');
const p9 = document.querySelector('#p9');
const p10 = document.querySelector('#p10');
const p11 = document.querySelector('#p11');
const p12 = document.querySelector('#p12');
const p13 = document.querySelector('#p13');
const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const user = document.querySelector('#user');
const user1 = document.querySelector('#user1');
const user2 = document.querySelector('#user2');
const user3 = document.querySelector('#user3');
const user4 = document.querySelector('#user4');
const user5 = document.querySelector('#user5');
const user6 = document.querySelector('#user6');
const user7 = document.querySelector('#user7');
const user8 = document.querySelector('#user8');
const sales1 = document.querySelector('#sales1');
const sales2 = document.querySelector('#sales2');
const details = document.querySelector('.details');
const content = document.querySelector('.content');
const sales = document.querySelector('.sales');
const cash = document.querySelector('.cash-emoji');
var icon = document.getElementById('icon');

// console.log(details);

Logo.addEventListener('click', ()=>{
    // console.log("I am working");
    main.classList.toggle('active');
    border.classList.toggle('active');
    p1.classList.toggle('active');
    p2.classList.toggle('active');
    p3.classList.toggle('active');
    p4.classList.toggle('active');
    p5.classList.toggle('active');
    p6.classList.toggle('active');
    p7.classList.toggle('active');
    p8.classList.toggle('active');
    p9.classList.toggle('active');
    p10.classList.toggle('active');
    p11.classList.toggle('active');
    p12.classList.toggle('active');
    p13.classList.toggle('active');
    h1.classList.toggle('active');
    h2.classList.toggle('active');
    h3.classList.toggle('active');
    user.classList.toggle('active');
    user1.classList.toggle('active');
    user2.classList.toggle('active');
    user3.classList.toggle('active');
    user4.classList.toggle('active');
    user5.classList.toggle('active');
    user6.classList.toggle('active');
    user7.classList.toggle('active');
    user8.classList.toggle('active');
    sales1.classList.toggle('active');
    sales2.classList.toggle('active');
    details.classList.toggle('active');
    content.classList.toggle('active');
    sales.classList.toggle('active');
    cash.classList.toggle('active');
    icon.classList.toggle('active');
});

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
    }
}