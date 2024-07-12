async function obtenerServicios(){
    var arrayCursos = [];
    try{
        const datacursos = await fetch('https://sheet.best/api/sheets/40a46eb6-e08a-4df4-aff6-b7a0ab4998a5/tabs/servicios');
        const contentServicios = await datacursos.json();

        for(var i = 0; i < contentServicios.length; i++){
            
            arrayCursos.push(contentServicios[i]);
        }

        let ContentStr = JSON.stringify(arrayCursos);    
        localStorage.setItem('servicios', ContentStr);

        createServicesCard();
        
    }catch(error){console.log(error)}
}

function createServicesCard(){
    localServicios = localStorage.getItem('servicios');
    localServiciosJson = JSON.parse(localServicios);

    for(var i = 0; i < localServiciosJson.length; i++){
        console.log(localServiciosJson[i]);

        let clonService = cardServicios.content.cloneNode(true);

        let img = clonService.querySelector('div > a > img');
        let p = clonService.querySelector('div > div > p');
        let small = clonService.querySelector('div > div > small');
        let a = clonService.querySelector('div > a');

        img.src = localServiciosJson[i].Img;
        p.textContent = localServiciosJson[i].Nombre;
        small.textContent = localServiciosJson[i].DescripcionCorta;

        a.setAttribute('data-id', i);


        serviciosContainer.appendChild(clonService);
    }   
}

function asignarServ(id){
    localStorage.setItem("currentSer", id.dataset.id);
}

function printServ(){
    let local = localStorage.getItem("servicios");
    let currentSer = localStorage.getItem("currentSer");

    let current = JSON.parse(local);

    let servicio = document.getElementById('serServicio');
    let descripcion = document.getElementById('serDes');

    let img1 = document.getElementById('serImg1');
    let img2 = document.getElementById('serImg2');
    let img3 = document.getElementById('serImg3');

    let des1 = document.getElementById('desSmall1'); 
    let des2 = document.getElementById('desSmall2'); 
    let des3 = document.getElementById('desSmall3');

    let container = document.getElementById('itemCont');

    servicio.textContent = current[currentSer].Nombre;
    descripcion.textContent = current[currentSer].Descripcion;

    img1.src = current[currentSer].Img1;
    img2.src = current[currentSer].Img2;
    img3.src = current[currentSer].Img3;

    des1.textContent = current[currentSer].Des1;
    des2.textContent = current[currentSer].Des2;
    des3.textContent = current[currentSer].Des3;

    for(var i = 1; i < 10; i++){
        let incluyeCon = 'Incluye' + i;

        if(current[currentSer][incluyeCon] != null){
            let item = document.createElement("p");
            item.classList.add("medium");
            item.textContent = current[currentSer][incluyeCon];
            container.appendChild(item);
        }
        if(current[currentSer]['Incluye' + (i+1)] != null){
            let linea = document.createElement("hr");
            linea.classList.add("hr-paq");
            container.appendChild(linea);
        }
    }
}

function enviarMsj(){
    let local = localStorage.getItem("servicios");
    let currentSer = localStorage.getItem("currentSer");

    let current = JSON.parse(local);

    let link = current[currentSer].Msj;
    let dir = 'https://wa.me/573187053038';
    let msj = '?text='+ current[currentSer].Msj;

    /*let msjW = dir + msj;*/

    window.open(link, '_blank');
}
