//all plants
const loadPlants = ()=>{
    fetch ("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayPlantsCards(json.plants))
}
loadPlants()

displayPlantsCards = (cards)=> {
    // get the container and empty
    const cardContainer = document.getElementById("card-container")
   cardContainer.innerHTML=""
    //get every card
    for(let card of cards){
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
         <div class="card bg-base-100 w-full shadow-sm p-2 h-[500px] flex flex-col">
                <div class="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                  <img src=" ${card.image} " alt="">
                </div>
                <div class="card-body p-1">
                  <h2 class="card-title"> ${card.name} </h2>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    ${card.description}
                  </p>
                  <div class="card-actions justify-between">
                    <div class="bg-[#DCFCE7] badge"> ${card.category} </div>
                    <div>৳ ${card.price} </div>
                  </div>
                  <div>
                    <button
                      class="btn btn-wide bg-[#15803D] text-white mt-3 rounded-3xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
        `
        // append into container
        cardContainer.append(cardDiv)
    }
}