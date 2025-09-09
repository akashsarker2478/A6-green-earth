
const openModal = (id)=>{
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  .then((res) => res.json())
  .then((data) => displayModal(data.plants))
};
const displayModal = (plant)=>{
  const detailsContainer = document.getElementById("details-container")
  detailsContainer.innerHTML = `
    <div id="details-container">
  <div class="card bg-base-100 p-2 flex flex-col">
    <div class="w-full h-48 bg-gray-200 rounded-md">
      <img src="${plant.image}" alt="${plant.name}" class="w-full h-full object-cover rounded-lg">
    </div>
    <div class="card-body p-2">
      <h2 class="card-title">${plant.name}</h2>
      <p class="text-sm text-gray-700 leading-relaxed">${plant.description}</p>
      <div class="card-actions flex justify-between">
        <div class="bg-[#DCFCE7] badge p-1">${plant.category}</div>
        <div class="font-bold">&#2547; ${plant.price}</div>
      </div>
    </div>
  </div>
</div>

  `
  document.getElementById("plants_modal").showModal()
};
const manageSpinner = (status)=>{
  if(status == true){
    document.getElementById("spinner").classList.remove("hidden")
    document.getElementById("plants-container").classList.add("hidden")
  }else{
     document.getElementById("plants-container").classList.remove("hidden")
    document.getElementById("spinner").classList.add("hidden")
  }
};

//all plants
const loadPlants = ()=>{
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
      .then(res => res.json())
      .then(json => {
          displayPlantsCards(json.plants);
          manageSpinner(false); 
      });
};
loadPlants()

displayPlantsCards = (cards)=> {
    const cardContainer = document.getElementById("card-container")
   cardContainer.innerHTML=""
   
    for(let card of cards){
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
         <div class="card bg-base-100 w-full shadow-sm p-2 h-full md:h-[500px] flex flex-col">
                 <div class="w-full h-auto bg-gray-200 rounded-md">
                  <img src= "${card.image}" alt="" class="w-full h-40 object-cover rounded-lg">
                </div>
                <div class="card-body px-1">
                  <h2 class="card-title"> ${card.name} </h2>
                  <p class="text-sm text-gray-700 leading-snug text-justify">
                    ${card.description}
                  </p>
                  <div class="card-actions flex flex-col md:flex-row justify-between">
                    <div onclick ="openModal('${card.id}')" class="bg-[#DCFCE7] badge cursor-pointer whitespace-nowrap"> ${card.category}</div>
                    <div class ="price font-bold">&#2547; ${card.price} </div>
                  </div>
                  <div>
                    <button
                      class="btn btn-wide bg-[#15803D] text-white mt-3 whitespace-nowrap rounded-3xl add-cart-btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
        `
        cardContainer.append(cardDiv)
    }
      cartButtons ()
    
};
//categories
const loadCatagories = ()=>{
  fetch("https://openapi.programming-hero.com/api/categories")
  .then((res) => res.json())
  .then((categories) => displayCategories(categories.categories))
}
loadCatagories()

const displayCategories = (allCategories) =>{
  const categoryContainer = document.getElementById("categories-container")
    categoryContainer.innerHTML =""
  for(let category of allCategories){
     const categoryLi = document.createElement("li")
     categoryLi.className = "hover:bg-[#15803D] hover:text-white cursor-pointer p-1 text-left whitespace-nowrap md:text-center font-semibold";
     categoryLi.textContent = category.category_name;
     categoryLi.addEventListener("click",()=>{
      const allLis = categoryContainer.querySelectorAll("li")
      allLis.forEach((li) => li.classList.remove("bg-[#15803D]", "text-white"))
      categoryLi.classList.add("bg-[#15803D]", "text-white")
     })
     // categories card
     categoryLi.addEventListener("click",()=>{
      manageSpinner(true)
      fetch(`https://openapi.programming-hero.com/api/category/${category.id}`)
      .then((res) =>res.json())
      .then((json) =>{
        displayPlantsCards(json.plants);
        manageSpinner(false)
      })
     })
     categoryContainer.append(categoryLi)
   }
};

//cart section
let cart = [];
const showCart = () =>{
  const cartContainer = document.getElementById("cart-container")
  const cartTotal = document.getElementById("cart-total")
  cartContainer.innerHTML = "";
  cart.forEach((item,index) =>{
    const div = document.createElement("div")
    div.className = "cart-item bg-[#DCFCE7] p-2 rounded-md flex justify-between items-center"
    div.innerHTML = `
              <div>
                <h5 class="font-bold">${item.name}</h5>
                <p>৳${item.price}</p>
              </div>
              <button class="text-red-500 font-bold">X</button>
    `;
    div.querySelector("button").addEventListener("click",()=>{
      cart.splice(index,1)
      showCart();
    })
    cartContainer.append(div)
  })
  const total = cart.reduce((sum , item) => sum + item.price,0);
  cartTotal.textContent =`Total:৳${total}`
};

const cartButtons = ()=>{
  document.querySelectorAll(".add-cart-btn").forEach((btn) =>{
    btn.addEventListener("click",()=>{
      const card = btn.closest(".card")
      const name = card.querySelector(".card-title").innerText
      const priceText = card.querySelector(".price").innerText
      const price = parseInt(priceText.replace("৳", "").trim());
       cart.push({ name, price });
       alert(`${name} has been added to the cart`);
    showCart();
    })
  })
};



