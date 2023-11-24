import menu from "./data";

let allDishes=document.getElementById('allDishes');
let content="";

displayAll(menu)

let allButtons=document.querySelectorAll('button');
allButtons.forEach((button)=>button.addEventListener('click',(e)=>{filterItem(e.target.innerText)}))

function displayAll(dishes){
  content=' ';
  dishes.map((dish)=>{
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
  
  allDishes.innerHTML=content;
  
}


// filter logic here


function filterItem(category){
  allDishes.innerHTML +=' ';
  if(category == 'All'){
    displayAll(menu)
  }
  else{
    let filteredItems=menu.filter((dish)=>dish.category.toLowerCase()==category.toLowerCase())
    displayAll(filteredItems)
  }
  
}