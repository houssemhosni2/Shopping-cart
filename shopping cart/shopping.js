const data= [
  {
      id : 0,
      img : 'images/redmiK20.jpg',
      name : document.getElementsByClassName("item-name")[0].innerHTML,
      price : document.getElementsByClassName("item-price")[0].innerHTML,
      save : 25,
      delievery : 'In 3 - 4 days',
      qtt:document.getElementsByClassName("number-items")[0].innerHTML,
      itemInCart: false
  },
  {
      id : 1,
      img : 'images/samGalaxynote20.jpg',
      name : document.getElementsByClassName("item-name")[1].innerHTML,
      price : document.getElementsByClassName("item-price")[1].innerHTML,
      save : 50,
      delievery : 'In 3 - 4 days',
      qtt:document.getElementsByClassName("number-items")[1].innerHTML,
      itemInCart: false
  },
  {
      id : 2,
      img : 'images/oppofindX2.jpg',
      name : document.getElementsByClassName("item-name")[2].innerHTML,
      price : document.getElementsByClassName("item-price")[2].innerHTML,
      qtt:document.getElementsByClassName("number-items")[2].innerHTML,
      save : 30,
      delievery : 'In 3 - 4 days',
      itemInCart: false
  },
  {
      id : 3,
      img : 'images/realmeX20pro.jpg',
      name : document.getElementsByClassName("item-name")[3].innerHTML,
      price : document.getElementsByClassName("item-price")[3].innerHTML,
      qtt:document.getElementsByClassName("number-items")[3].innerHTML,
      save : 35,
      delievery : 'In 3 - 4 days',
      itemInCart: false
  },
  {
      id : 4,
      img : 'images/redminote8.jpg',
      name : document.getElementsByClassName("item-name")[4].innerHTML,
      price : document.getElementsByClassName("item-price")[4].innerHTML,
      qtt:document.getElementsByClassName("number-items")[4].innerHTML,
      save : 15,
      delievery : 'In 3 - 4 days',
      itemInCart: false
  },
  {
      id : 5,
      img : 'images/redminote9.jpg',
      name : document.getElementsByClassName("item-name")[5].innerHTML,
      price : document.getElementsByClassName("item-price")[5].innerHTML,
      qtt:document.getElementsByClassName("number-items")[5].innerHTML,
      save : 25,
      delievery : 'In 3 - 4 days',
      itemInCart: false
  },
  {
      id : 6,
      img : 'images/redmi8.jpg',
      name : document.getElementsByClassName("item-name")[6].innerHTML,
      price : document.getElementsByClassName("item-price")[6].innerHTML,
      qtt:document.getElementsByClassName("number-items")[6].innerHTML,
      save : 20,
      delievery : 'In 3 - 4 days',
      itemInCart: false
  },
  {
      id : 7,
      img : 'images/redmi9.jpg',
      name : document.getElementsByClassName("item-name")[7].innerHTML,
      price : document.getElementsByClassName("item-price")[7].innerHTML,
      qtt:document.getElementsByClassName("number-items")[7].innerHTML,
      save : 10,
      delievery : 'In 3 - 4 days',
      itemInCart: false
  },
];




let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
  if(e.target.id=='remove'){
      var itemId = e.target.parentNode.id
      removeFromCart(itemId)
  }
})


//click event to display details page
for(i=0;i<data.length;i++){
  detail[i].addEventListener('click',handleDetail)
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
  detailsPage.style.display = 'block'
  getId= this.parentNode.id;
  detailsImg.src= data[getId].img;
  detailTitle.innerHTML=   data[getId].name;
  detailPrice.innerHTML= 'Price : $ ' +data[getId].price;
  youSave.innerHTML= 'You save : ($ ' + data[getId].save + ')';
}
var plus = document.querySelectorAll(".plus-btn");
//var quantity=document.querySelectorAll('.number-items')
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;
    addItem();
    
  });
}
var minus = document.querySelectorAll(".minus-btn");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerHTML > 0) {
      minus[i].previousElementSibling.innerHTML--;
    }
    
   
  });
}

function please(){
  var minus = document.querySelectorAll(".minus-btn");
  for (let i = 0; i < minus.length; i++) {
  if (minus[i].previousElementSibling.innerHTML > 0) {
    minus[i].previousElementSibling.innerHTML--;
  } 
}
return previousElementSibling;
}

// add item to the cart
function addToCart(id) {
  if(!data[id].itemInCart){
      cartList= [...cartList,data[id]];
      addItem()
      
      alert('item added to your cart')

  }
  else{
      alert('your item is already there')
  }
  data[id].itemInCart= true
}

//back to main page
function refreshPage(){
  detailsPage.style.display = 'none'
  
}

// hide your cart page
function hideCart(){
  document.getElementById('main').style.display= "block";
  // document.getElementById('carouselExampleIndicators').style.display="none"
  document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
  document.getElementById('main').style.display= "none";
  document.getElementById('details-page').style.display= "none";
  document.getElementById('cart-container').style.display= "block";
  if(cartList.length==0){
      document.getElementById('cart-with-items').style.display= "none";
      document.getElementById('empty-cart').style.display= "block";
  }
  else{
      document.getElementById('empty-cart').style.display= "none";
      document.getElementById('cart-with-items').style.display= "block";
      
  }
}
 

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart


function addItem(){
  totalAmount=0;
  totalItems = 0;
  totalSaving=0;
  
  var clrNode=document.getElementById('item-body');
  
      clrNode.innerHTML= '';
      console.log(clrNode.childNodes)
      cartList.map((cart)=>
      { 
        
          var cartCont = document.getElementById('item-body');
          totalAmount = totalAmount + cart.price* cart.qtt;
          
          totalSaving = totalSaving + cart.save;
          totalItems = totalItems + 1;

          var tempCart = document.createElement('div')
          tempCart.setAttribute('class','cart-list');
          tempCart.setAttribute('id',cart.id);

          var listImg = document.createElement('img');
          listImg.setAttribute('id','list-img');
          listImg.src = cart.img
          tempCart.appendChild(listImg)

          var listName = document.createElement('h3');
          listName.setAttribute('class','list-name');
          listName.innerHTML = cart.name;
          tempCart.appendChild(listName)

          var listPay = document.createElement('h3');
          listPay.setAttribute('class','pay');
          listPay.innerHTML = cart.price;
          tempCart.appendChild(listPay);

          var listQuantity = document.createElement('h3');
          listQuantity.setAttribute('class','quantity');
          listQuantity.innerHTML = cart.qtt;
          tempCart.appendChild(listQuantity);

          var listTrash = document.createElement('i');
          listTrash.setAttribute('class','fa fa-trash ');
          listTrash.setAttribute('id','remove');
          tempCart.appendChild(listTrash);

          cartCont.appendChild(tempCart)
          
      })
      document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
      document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
      document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
      document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
  data[itemId].itemInCart = false
  cartList = cartList.filter((list)=>list.id!=itemId);
  addItem()
  if(cartList.length==0){
      document.getElementById('cart-with-items').style.display= "none";
      document.getElementById('empty-cart').style.display= "block";
  }
}

//changer couleur
var like=  document.querySelectorAll("[id='heart-to-cart']");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color === "black") {
      like[i].style.color = "red";
    } else {
      like[i].style.color = "black";
    }
  });
}
