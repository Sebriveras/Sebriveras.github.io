var arrayAppend = ["container-categories", "container-categoriesSmall"]

function createAll(){
    const bigCategoryTemplate = document.getElementById("template-big");
    const container = document.getElementById("container-items");
    const containerBig = document.getElementById("container-big");

    arrayCategorias.forEach(element =>{
        const big = bigCategoryTemplate.content.cloneNode(true);
        
        const name = big.querySelector("p");
        const icon = big.querySelector("span");

        name.textContent = element;

        switch (element){
            case "Brunch": icon.textContent = "egg_alt"
            break;

            case "Principales": icon.textContent = "restaurant"
            break;

            case "Bebidas": icon.textContent = "emoji_food_beverage"
            break;

            case "Antojos": icon.textContent = "bakery_dining"
            break;
        }

        containerBig.appendChild(big)
    });

    for(var j = 0; j < arrayAppend.length; j++){
        let selected = (j === 0);
        createCategories(arrayAppend[j], selected)
    }

    for(var i = 0; i < arrayItems.length; i++){
        createItems(arrayItems[i], container, i)
    }
}

function createItems(item, append, id, trash = null){
    const itemTemplate = document.getElementById("template-card");

    const clonItem = itemTemplate.content.cloneNode(true);

    const first = clonItem.querySelector(".card");
    const name = clonItem.querySelector("#card-item");
    const price = clonItem.querySelector("#card-price");
    const description = clonItem.querySelector("#card-description");
    const option = clonItem.querySelector("#card-option");
    const optionName = clonItem.querySelector("#card-option > p");
    const optionIcon = clonItem.querySelector("#card-option > span");
    const selection = clonItem.querySelector("#card-selection");


    name.innerHTML = item.nombre + " - &nbsp;";
    price.textContent = item.precio;
    description.textContent = item.descripcion;
    selection.dataset.id = id;
    selection.dataset.switch = "on";
    selection.dataset.item = item.nombre;
    first.dataset.id = item.subcategoria;

    if(trash){
        selection.dataset.remove = "remove";
        selection.textContent = "close";
    }


    if(item.opcion !== ""){
        option.style.display = "inline-flex";
        optionName.textContent = item.opcion;

        switch (item.opcion){
            case "Vegano":
                optionIcon.textContent = "psychiatry";
            break;

            case "Vegetariano":
                optionIcon.textContent = "nutrition";
            break;
        } 
    }
    append.appendChild(clonItem);
}

function createCategories(append, selected = null){
    const apendID = document.getElementById(append);

    setSubCategorias.forEach((element, index) =>{
        const newCategory = document.createElement("p");

        newCategory.textContent = element;
        
        if(index === 0 && selected){
            newCategory.style.backgroundColor = "var(--accent)"
            newCategory.style.color = "var(--white)";
            newCategory.style.fontWeight = 500;
        }

        if(selected === false){
            const newDiv = document.createElement("div");

            newDiv.dataset.id = element;
            newCategory.style.display = "none";
            
            newDiv.appendChild(newCategory)
            apendID.appendChild(newDiv);
        }
        else{
            newCategory.dataset.id = element;
            apendID.appendChild(newCategory);
        }
    });
}