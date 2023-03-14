/*
const goalForm = document.querySelector('#goals form');
const goalInput = document.querySelector('#goals input[type="text"]');
const goalList = document.querySelector('#goal-list');
const searchI=document.querySelector('#search')

goalForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const goalText = goalInput.value.trim();
	if (goalText !== '') {
		addGoal(goalText);
		goalInput.value = '';
	}
});

searchI.addEventListener('click',getgoalList.appendChild(goalItem))





function addGoal(goalText) {
	const goalItem = document.createElement('li');
	goalItem.innerHTML = `
		<span>${goalText}</span>
	//${goalText}
`;
goalList.appendChild(goalItem);

}

// Progress chart using Chart.js library const progressChart = document.querySelector('#progress-chart');

const data = { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], datasets: [ { label: 'Progress', backgroundColor: '#333', borderColor: '#333', data: [0, 1, 3, 2, 4, 2, 5], }, ], };

const config = { type: 'bar', data: data, options: { scales: { y: { beginAtZero: true, }, }, }, };

const progressChartObj = new Chart(progressChart, config);*/

/*
let ingredientList=[];
function addIngredient(){

    let ingredientInput=document.getElementById("ingredientInput");
let ingredientListElement=document.getElementById("ingredientList");
if(ingredientInput.value !=="") {
    let newIngredient=document.createElement("li");
    newIngredient.innerText=ingredientInput.value;
    let deleteButton=document.createElement("button");
    deleteButton.innerText="Delete";

    deleteButton.onclick=function(){
ingredientList.splice(ingredientList.indexOf(newIngredient.innerText),1);
ingredientListElement.removeChild(newIngredient)

    };
newIngredient.appendChild(deleteButton);
ingredientListElement.appendChild(newIngredient);
ingredientInput.value="";

}
}
function generate(){
let ingredientList=[];
let 

let apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientInput}"+encodeURIComponent(ingredientList.join(","));
fetch(apiUrl)
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}


//www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt*/
/*

let ingredientList=[];
function addIngredient(){
let ingredientInput= document.getElementById("ingredientInput");
let ingredientListDiv=document.getElementById("ingredientList");
let newIngredient=document.createElement("input");;
newIngredient.setAttribute("type", "text");
newIngredient.setAttribute("class","ingredient")
newIngredient.setAttribute("value",ingredientInput.value);

ingredientList.push(ingredientInput.value);
ingredientInput.value="";
ingredientListDiv.appendChild(newIngredient);



}

function generate(){
let ingredientString =ingredientList.join(",");
fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + encodeURIComponent(ingredientString) + "&ranking=2&apiKey=9a520e670ba141688a906ed02df829e2")
.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data.length > 0) {
				let recipeUrl = data[0].sourceUrl;
				window.open(recipeUrl, "_blank");
			} else {
				alert("No recipes found");
			}
		})
		.catch(error => {
			console.error(error);
			alert("Error retrieving recipe");
		});


}*/


/*
const API_KEY = "9a520e670ba141688a906ed02df829e2";
const apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
const apiInfoUrl = "https://api.spoonacular.com/recipes";
const SelectedIngredients=document.querySelector(".selected-ingredients")
const recipeInput = document.getElementById("recipeInput");
const searchBtn = document.getElementById("searchBtn");
const recipeList = document.getElementById("recipeList");
let ingredient=[];
searchBtn.addEventListener("click", () => {
  const ingredients = 
  recipeInput.value.split(",").map((ingredient)=>ingredient.trim());
  renderSelectedIngredients();
  fetchRecipes();
});

async function fetchRecipes(){
  

  const queryUrl = `${apiUrl}?apiKey=${API_KEY}&ingredients=${ingredients.join(",")}`;
  fetch(queryUrl)
    .then(response => response.json())
    .then(data => {
      recipeList.innerHTML = "";
      const grid = document.createElement("div");
      grid.className = "grid-container";
      data.forEach(recipe => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        const img = document.createElement("img");
        img.src = recipe.image;
        const title = document.createElement("h3");
        title.textContent = recipe.title;
        const instructionBtn = document.createElement("button");
        instructionBtn.textContent = "Get Instructions";
        instructionBtn.addEventListener("click", () => {
          fetch(`${apiInfoUrl}/${recipe.id}/analyzedInstructions?apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
              const instructions = data[0].steps.map(step => step.step);
              const instructionList = document.createElement("ul");
              instructions.forEach(instruction => {
                const li = document.createElement("li");
                li.textContent = instruction;
                instructionList.appendChild(li);
              });
              const modalContent = document.createElement("div");
              modalContent.appendChild(instructionList);
              const modal = createModal(modalContent);
              document.body.appendChild(modal);
            })
            .catch(error => console.log(error));
        });
        const videoBtn = document.createElement("button");
        videoBtn.textContent = "Watch Video";
        videoBtn.addEventListener("click", () => {
          window.open(`https://www.youtube.com/results?search_query=${recipe.title}`, "_blank");
        });
        gridItem.appendChild(img);
        gridItem.appendChild(title);
        gridItem.appendChild(instructionBtn);
        gridItem.appendChild(videoBtn);
        grid.appendChild(gridItem);
      });
      recipeList.appendChild(grid);
    })
    .catch(error => console.log(error));
}

function createModal(content) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal";
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });
  modal.appendChild(content);
  modal.appendChild(closeBtn);
  modalOverlay.appendChild(modal);
  return modalOverlay;
}



function renderSelectedIngredients(){
//split input with comma
//const ingredients = recipeInput.value.split(",");
//SelectedIngredients.innerHTML="";
ingredients.forEach((ingredient) => {
const pill=document.createElement("div");
pill.classList.add("selected-ingredient");
pill.innerText=ingredient;
//close button
const closeButton=document.getElementById("button");
closeButton.innerText="X";
closeButton.addEventListener("click",()=>{
ingredient=ingredient.filter((i) =>i !==ingredient)
renderSelectedIngredients();
});


pill.appendChild(closeButton);
SelectedIngredients.appendChild(pill);

});



};*/


const API_KEY = "d88e3c5c678e4227916e0f19b1977c4c";
const apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
const apiInfoUrl = "https://api.spoonacular.com/recipes";
//const cuisine="african:nigeria";
const recipeForm = document.getElementById("recipeForm")
const recipeInput = document.getElementById("recipeInput");
const searchBtn = document.getElementById("searchBtn");
const recipeList = document.getElementById("recipeList");


recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const ingredients = recipeInput.value.split(",");
  const queryUrl = `${apiUrl}?apiKey=${API_KEY}&ingredients=${ingredients.join(",")}&cuisine=african`;
  const notFound=document.querySelector(".not-found")
  fetch(queryUrl)
    .then(response => response.json())
    .then(data => {

      recipeList.innerHTML = "";
      if( data.length === 0){
        html="sorry, we didn't find your meal";
        recipeList.classList.add('not-found');
     }
      recipeList.innerHTML=html;
      
      const grid = document.createElement("div");
      grid.className = "grid-container";
      data.forEach(recipe => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        const img = document.createElement("img");
        img.src = recipe.image;
        const title = document.createElement("h3");
        title.textContent = recipe.title;
        const instructionBtn = document.createElement("button");
        instructionBtn.textContent = "Get Instructions";
        instructionBtn.addEventListener("click", () => {
          fetch(`${apiInfoUrl}/${recipe.id}/analyzedInstructions?apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
 const instructions = data[0].steps.map(step => step.step);
              const instructionList = document.createElement("ul");
              instructions.forEach(instruction => {
                const li = document.createElement("li");
                li.textContent = instruction;
                instructionList.appendChild(li);
              });
              const modalContent = document.createElement("div");
              modalContent.appendChild(instructionList);
              const modal = createModal(modalContent);
              document.body.appendChild(modal);
            })
            .catch(error => console.log(error));
        });
        const videoBtn = document.createElement("button");
        videoBtn.textContent = "Watch Video";
        videoBtn.addEventListener("click", () => {
          window.open(`https://www.youtube.com/results?search_query=${recipe.title}`, "_blank");
        });
        gridItem.appendChild(img);
        gridItem.appendChild(title);
        gridItem.appendChild(instructionBtn);
        gridItem.appendChild(videoBtn);
        grid.appendChild(gridItem);
      });
      recipeList.appendChild(grid);
      recipeInput.value="";
    })
    .catch(error => console.log(error));
   //alert("meal not found")
   let html="";
});

function createModal(content) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal";
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });
  modal.appendChild(content);
  modal.appendChild(closeBtn);
  modalOverlay.appendChild(modal);
  return modalOverlay;
}




/*

const API_KEY = "d88e3c5c678e4227916e0f19b1977c4c";
const apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
const apiInfoUrl = "https://api.spoonacular.com/recipes";

const recipeForm = document.getElementById("recipeForm");
const recipeInput = document.getElementById("recipeInput");
const searchBtn = document.getElementById("searchBtn");
const recipeList = document.getElementById("recipeList");

recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const ingredients = recipeInput.value.split(",");
  const queryUrl = `${apiUrl}?apiKey=${API_KEY}&ingredients=${ingredients.join(",")}`;
  
  fetch(queryUrl)
    .then(response => response.json())
    .then(data => {
      recipeList.innerHTML = "";
      const grid = document.createElement("div");
      grid.className = "grid-container";
      data.forEach(recipe => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        const img = document.createElement("img");
        img.src = recipe.image;
        const title = document.createElement("h3");
        title.textContent = recipe.title;
        const instructionBtn = document.createElement("button");
        instructionBtn.textContent = "Get Instructions";
        instructionBtn.addEventListener("click", () => {
          fetch(`${apiInfoUrl}/${recipe.id}/analyzedInstructions?apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
              const instructions = data[0].steps.map(step => step.step);
              const modalContent = createModalContent(recipe.title, instructions, recipe.image);
              const modal = createModal(modalContent);
              document.body.appendChild(modal);
            })
            .catch(error => console.log(error));
        });
        const videoBtn = document.createElement("button");
        videoBtn.className = "video-btn";
        videoBtn.textContent = "Watch Video";
        videoBtn.addEventListener("click", () => {
          window.open(`https://www.youtube.com/results?search_query=${recipe.title}`, "_blank");
        });
        gridItem.appendChild(img);
        gridItem.appendChild(title);
        gridItem.appendChild(instructionBtn);
        gridItem.appendChild(videoBtn);
        grid.appendChild(gridItem);
      });
      recipeList.appendChild(grid);
    })
    .catch(error => console.log(error));
    
  recipeInput.value = ""; // clear input field
});

function createModalContent(title, instructions, image) {
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  const img = document.createElement("img");
  img.src = image;
  img.className = "modal-image";
  const modalTitle = document.createElement("h3");
  modalTitle.textContent = title;
  const instructionList = document.createElement("ol");
  instructions.forEach(instruction => {
    const li = document.createElement("li");
    li.textContent = instruction;
    instructionList.appendChild(li);
  });
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(img);
  modalContent.appendChild(instructionList);
  return modalContent;
}

function createModal(content) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal";
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });
  modal.appendChild(content);
  modal.appendChild(closeBtn);
  modalOverlay.appendChild(modal);
  return modalOverlay;
}
*/








