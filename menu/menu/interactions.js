function moveScreens(hide, show, type){
    const hideScreen = document.getElementById(hide);
    const showScreen = document.getElementById(show);
    const buttomBack = document.getElementById("buttom-back");

    buttomBack.style.display = "flex"

    buttomBack.dataset.to = hide;
    buttomBack.dataset.from = show;

    hideScreen.style.display = "none";
    showScreen.style.display = type;
}

function moveBack(element){
    const hideScreen = document.getElementById(element.dataset.from);
    const showScreen = document.getElementById(element.dataset.to);

    hideScreen.style.display = "none"
    showScreen.style.display = "flex";

    element.style.display ="none"
}

function selectCategory() {
    const categories = document.querySelectorAll('#container-categories p');
    const allCards = document.querySelectorAll("#container-items .card");
    const containerItems = document.getElementById("container-items");
    
    categories.forEach(cat => {
        cat.addEventListener('click', function() {
  
            categories.forEach(c => {
                c.style.backgroundColor = "var(--light-gray)"
                c.style.color = "var(--medium-gray)"
                c.style.fontWeight = 400;
            });

            this.style.backgroundColor = "var(--accent)";
            this.style.color = "var(--white)";
            this.style.fontWeight = 500;

            const dataIdValue = this.getAttribute("data-id");
            const selected = document.querySelectorAll(`#container-items .card[data-id="${dataIdValue}"]`);

            allCards.forEach(element => element.style.display = "none");
            selected.forEach(element => element.style.display = "flex");

            setLines(containerItems, dataIdValue);
        });
    });

    const initialSelectedCategory = document.querySelector('#container-categories p.selected');

    if(initialSelectedCategory){
        const initialDataIdValue = initialSelectedCategory.getAttribute("data-id");
        const initialSelectedItems = document.querySelectorAll(`#container-items .card[data-id="${initialDataIdValue}"]`);
        
        allCards.forEach(element => element.style.display = "none");
        initialSelectedItems.forEach(element => element.style.display = "flex")
    }
}

function itemInteraction(span){
    let index = span.dataset.id;
    let item = span.dataset.item;
    let category = span.parentElement.dataset.id;

    const cat = document.querySelector(`#container-categoriesSmall div[data-id="${category}"]`);

    if (span.dataset.remove === "remove"){
        const icon = document.querySelector(`#container-items .card span[data-item="${item}"]`);
        
        if(icon){
            icon.textContent = "add_box";
            icon.dataset.switch = "on"
        }

        const card = span.parentElement;
        const cardCategory = card.parentNode;

        card.remove();

        setLines(cardCategory);

        const divsCard = document.querySelector("#container-categoriesSmall .card");
        catDiv = cat.querySelector("div")

        if(catDiv == null){
            cat.querySelector("p").style.display = "none";
        }

        if(divsCard == null){
            voidScreen(true)
        }
        return; 
    }


    if (span.dataset.switch === "on"){

        createItems(arrayItems[index], cat, index, true);

        span.textContent = "check";
        span.dataset.switch = "off";

        voidScreen(false);
    }
}

function voidScreen(state){
    const selectionVoid = document.getElementById("selection-void");
    
    if(state) {
        selectionVoid.style.display = "flex";
    }else{
        selectionVoid.style.display = "none"; 
    }
}

function setLines(container, category = null) {
    // Seleccionamos todas las tarjetas y las tarjetas de la categoría específica
    const cards = container.querySelectorAll(".card");
    const cardsCat = category ? container.querySelectorAll(`.card[data-id="${category}"]`) : null;

    // Si hay tarjetas de la categoría específica, las usamos, sino usamos todas las tarjetas
    const items = cardsCat && cardsCat.length ? cardsCat : cards;

    // Recorremos los elementos y establecemos los estilos
    items.forEach((element, index) => {
        element.style.borderBottom = "var(--light-gray) solid 2px";

        if (index === items.length - 1) {
            element.style.borderBottom = "var(--white) solid 2px";
        }
    });
}

document.getElementById("button-menu").addEventListener("click", function(){
    const categoriesSelection = document.querySelectorAll("#container-categoriesSmall div");

    categoriesSelection.forEach(element => {
        const elementContent = element.querySelector(".card");
        const elementP = element.querySelector("p");

        if(elementContent !== null){ 
            elementP.style.display = "block";
        }

        setLines(element);
    });
});


function moveMenu() {
    const bigCategories = document.querySelectorAll(".big-category");

    bigCategories.forEach(element => {
        element.addEventListener("click", function(){
            element.classList.add("big-category-selected");


            setTimeout(function() {
                moveScreens('section-categories', 'menu', 'block');
                element.classList.remove("big-category-selected");
            }, 350); 
        });
    });
}

