
var arrayItems = [];
var arrayCategorias = [];
var setSubCategorias = [];
var setFull = {};

async function getData() {
    try {
        const importedData = await fetch('https://sheet.best/api/sheets/09f67eee-371b-4a6b-818a-7b2ce639a4a6');
        
        importedArray = await importedData.json();
        importedArray.forEach(element => arrayItems.push(element));

        let setCategorias = new Set();

        arrayItems.forEach(element => setCategorias.add(element.categoria));
        setCategorias.forEach(element => arrayCategorias.push(element))

        arrayCategorias.forEach(categoria => setFull[categoria] = []);

        for(var i = 0; i < arrayCategorias.length; i++){
            arrayItems.forEach(item => {
                if (arrayCategorias[i] === item.categoria && !setFull[arrayCategorias[i]].includes(item.subcategoria)){
                    setFull[arrayCategorias[i]].push(item.subcategoria);
                    setSubCategorias.push(item.subcategoria);
                }
            });
        }

        createAll();

    } catch (error) {console.log(error);}
}

console.log(arrayItems)


/*var e1 = {
    nombre: "Tuna",
    precio: 22,
    descripcion: "Atún, mix de lechugas, tomates, cebollas encurtidas, mayonesa de finas hierbas.",
    opcion: "",
    subcategoria: "Ensaladas",
    categoria: "Principales"
}

var e2 = {
    nombre: "César con pollo",
    precio: 22,
    descripcion: "Pollo rostizado, lechuga, crotones de pan, queso parmesano y vinagreta de la casa.",
    opcion: "",
    subcategoria: "Pastas",
    categoria: "Principales"
}

var e3 = {
    nombre: "Vegan",
    precio: 18,
    descripcion: "Quinoa, Pimentón, brotes de lentejas, lechuga, tomate cherri, pepino, rabanos y salsa de soja.",
    opcion: "Vegano",
    subcategoria: "Ensaladas",
    categoria: "Principales"
}

var e4 = {
    nombre: "Primavera",
    precio: 26,
    descripcion: "Salsa pomodoro con tomate cherri, espinaca y albahaca.",
    opcion: "Vegano",
    subcategoria: "Pastas",
    categoria: "Principales"
}

var e5 = {
    nombre: "Pollo y champiñones",
    precio: 26,
    descripcion: "Bechamel con champiñones y pechuga de pollo en julianas.",
    opcion: "",
    subcategoria: "Pastas",
    categoria: "Principales"
}

var e6 = {
    nombre: "Bolonesa",
    precio: 26,
    descripcion: "Boloñesa y queso parmesano rallado.",
    opcion: "",
    subcategoria: "Pastas",
    categoria: "Principales"
}

var e7 = {
    nombre: "Carbonara",
    precio: 26,
    descripcion: "Tocineta y salsa de huevo y queso parmesano.",
    opcion: "",
    subcategoria: "Pastas",
    categoria: "Principales"
}

var e8 = {
    nombre: "Croqueta de espinaca",
    precio: 9.5,
    descripcion: "Increibles croquetas a base de espinaca con pimienta y un toque de nuez moscada.",
    opcion: "Vegetariano",
    subcategoria: "Entradas",
    categoria: "Brunch"
}

var e9 = {
    nombre: "Cascos salsa de queso",
    precio: 14.5,
    descripcion: "Cascos de papas acompañados de una deliciosa salsa de tres quesos.",
    opcion: "Vegetariano",
    subcategoria: "Entradas",
    categoria: "Brunch"
}

var e10 = {
    nombre: "Canapé de salmón",
    precio: 16.5,
    descripcion: "Elegante combinación entre tostadas de pan de masa madre en rodajas, queso crema, eneldo y salmón ahumado.",
    opcion: "",
    subcategoria: "Entradas",
    categoria: "Brunch"
}

var e10 = {
    nombre: "Canapé de salmón",
    precio: 16.5,
    descripcion: "Elegante combinación entre tostadas de pan de masa madre en rodajas, queso crema, eneldo y salmón ahumado.",
    opcion: "",
    subcategoria: "Entradas",
    categoria: "Brunch"
}

var e11 = {
    nombre: "Malteada",
    precio: 16.5,
    descripcion: "",
    opcion: "",
    subcategoria: "Frias",
    categoria: "Bebidas"
}

var e12 = {
    nombre: "Jugo natural",
    precio: 16.5,
    descripcion: "",
    opcion: "",
    subcategoria: "Frias",
    categoria: "Bebidas"
}

var e13 = {
    nombre: "Chemex",
    precio: 18,
    descripcion: "",
    opcion: "",
    subcategoria: "Filtrados",
    categoria: "Bebidas"
}

var e14 = {
    nombre: "Drippers",
    precio: 18,
    descripcion: "",
    opcion: "",
    subcategoria: "Filtrados",
    categoria: "Bebidas"
}

var arrayItems = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14];
var setCategorias = new Set();
var setSubCategorias = [];
var setFull = {};

arrayItems.forEach(element => setCategorias.add(element.categoria));
const arrayCategorias = Array.from(setCategorias);

arrayCategorias.forEach(categoria => setFull[categoria] = []);

for(var i = 0; i < arrayCategorias.length; i++){
    arrayItems.forEach(item => {
        if (arrayCategorias[i] === item.categoria && !setFull[arrayCategorias[i]].includes(item.subcategoria)){
            setFull[arrayCategorias[i]].push(item.subcategoria);
            setSubCategorias.push(item.subcategoria);
        }
    });
}

*/



