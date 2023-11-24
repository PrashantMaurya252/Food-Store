import menu from "./data";

let allDishes=document.getElementById('allDishes');
let content="";
menu.map((dish)=>{
  let individualDish=`
  <div class="dish">
      <img src="${dish.img}" alt="">
      <div class="dishOuter">
        <div class="dishInner">
          <h3 class="dishName">${dish.title}</h3>
          <h3 class="dishPrice">${dish.price}</h3>
        </div>
        
        
        <p>${dish.desc}</p>
      </div>
    </div>
  `
  content += individualDish
})

allDishes.innerHTML=content