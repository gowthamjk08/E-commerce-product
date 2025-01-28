let navBar = document.getElementById('navBar');
let navigation = document.querySelector('nav');
let bghide = document.getElementById('bgHide');
let cart = document.getElementById('cart');

function navToggle(){
    navBar.classList.toggle('navBar-active');
    navigation.classList.toggle('nav-active');
    bghide.classList.toggle('bgHide');
    document.body.classList.toggle('body');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      if(cart.classList.contains('cartshow')){
        cart.classList.remove('cartshow');
    }
}

let img = document.querySelectorAll('.img-thumb img');
let mianImg = document.getElementById('img-main');
function imgThumb(curImg){
    mianImg.setAttribute('src',`./images/image-product-${curImg+1}.jpg`);
    for(let i = 0 ;i<img.length;i++){
        if(i == curImg){
            img[curImg].className = "img-active";
        }
        else{
            img[i].classList.remove('img-active');
        }
    }
}

let img2 = document.querySelectorAll('.img-thumb2 img');
let mianImg2 = document.getElementById('img-main2');
function imgThumb2(curImg){
    mianImg2.setAttribute('src',`./images/image-product-${curImg+1}.jpg`);
    for(let i = 0 ;i<img2.length;i++){
        if(i == curImg){
            img2[curImg].className = "img-active";
        }
        else{
            img2[i].classList.remove('img-active');
        }
    }
}


let count = 0;
function imgchange(action){
    if(action == 'pre'){
        count++ ;
    }
    else{
        count--;
    }

    if(count == 4){
        count = 0;
    }
    if(count == -1){
        count = 3
    }
            imgThumb2(count);
}

let imgcontainer = document.getElementById('imgcontainer');

function keypress(e){
    if(e.code == 'ArrowLeft'){
        imgchange('next');
    }
    if(e.code == 'ArrowRight'){
        imgchange('pre');
    }
}

function imgshow(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    document.body.style = "overflow:hidden;";
    document.body.addEventListener('keyup',keypress);

    bghide.className = 'imgbg';
    imgcontainer.className = "imgshow";
}


function closeImg(){
    document.body.style = "overflow:unset";
    document.body.removeEventListener('keyup',keypress);
    bghide.className = '';
    imgcontainer.className = "imgcon";
}
let cartContainer = document.getElementById('cartcontainer');
let emptyCart = document.getElementById('emptyCart');
let cartImgCount = document.getElementById('cartImgCount');
let cartCount = 0 ;
function removeCart(){
    cartContainer.className = 'carthide';
    emptyCart.className = 'cartshow'; 
    cartCount = 0; 
    cartCountElement.innerText = cartCount;
    cartImgCount.innerText = "";
    cartImgCount.className = '';
}

let cartCountElement = document.getElementById('count');
function numberOfCartItem(oparation){

        if(oparation == 'add'){
            cartCount++;
            cartCountElement.innerText = cartCount;
        }
        else{
            if(cartCount != 0){
                cartCount--;
                cartCountElement.innerText = cartCount;
            }
        }
}


function cartIcon(){
    cart.classList.toggle('cartshow');

    navBar.classList.remove('navBar-active');
    navigation.classList.remove('nav-active');
    bghide.classList.remove('bgHide');
    document.body.classList.remove('body');
}

let rateshow = document.getElementById('rateshow');
let totalAmount = document.getElementById('totalAmount');

function addToCart(del){
    if(cartCount > 0 ){
        rateshow.innerText = `$120 x ${cartCount} `;
        totalAmount.innerText =`$ ${120*cartCount}`;
        cartContainer.className = 'cartshow';
        emptyCart.className = 'carthide'; 
        cartImgCount.innerText = cartCount;
        cartImgCount.className = 'cartImgCount';
        if(!cart.classList.contains('cartshow')){
            cart.classList.add('cartshow');
        }
    }
}

