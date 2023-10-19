
function TarRecomendados(p,) {
    var ContenedorRecom = document.getElementById("ContenedorRecom");
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");
    tarjeta.innerHTML = `
    <div class="pelicula">
     <div >
    <img src="${p.ImagenCarta}" class="portada">
    </div>
    <div class="info">
    <div class="calif">
     <div class="rtn">
   <h2> Ratings: </h2>
</div>
  <div class="ratingestrellas">
   </div>
   </div>
 <div class="ssave">
   <img src="./iconos/baseline_bookmark_border_white_48dp.png" class="gurd">
   /div>
    
  </div>
</div>  `
;

const estrellaDiv = tarjeta.querySelector('.ratingestrellas');

    if (p.Rating >= 4.5) {
        for (let i = 0; i < 5; i++) {
            const estrella = document.createElement('img');
            estrella.src = "./iconos/baseline_star_white_48dp.png";
            estrella.classList.add('star');
            estrellaDiv.appendChild(estrella);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            const estrella = document.createElement('img');
            estrella.src = "./iconos/baseline_star_white_48dp.png";
            estrella.classList.add('star');
            estrellaDiv.appendChild(estrella);
        }

        const estrellaVacia = document.createElement('img');
        estrellaVacia.src = "./iconos/baseline_star_outline_white_48dp.png";
        estrellaVacia.classList.add('star');
        estrellaDiv.appendChild(estrellaVacia);
}

tarjeta.addEventListener("click", function () {
    BannerPeli(p);
});

ContenedorRecom.appendChild(tarjeta);
}


function BannerPeli(p) {
    var banner = document.getElementById("banner");
    banner.innerHTML = "";
    banner.innerHTML = `
    <div class="main">
    <div class="dv">
    <div class="fotom">
        <image class="fotoo" src="${p.Imagenlarga}"></image>
</div>
        <div class="inside">
    <div class="titulopeli">
    <h1> <strong> ${p.Nombre}</strong> </h1> 
    <h5> ${p.Rating}</h5>
</div>
<div class="descripcionn">
    <p> ${p.Descripción} </p> &nbsp;
</div>
<div class="btn">
   <button class="btnplay"> 
   <img src="./iconos/baseline_play_arrow_white_48dp.png" class="play"> 
   <strong> Play </strong></button>
    <button class="btnsave"> 
    <strong> Save </strong><img src="./iconos/baseline_bookmark_border_white_48dp.png" class="save"> 
    </button>
    <h4> ${p.Edad}</h4> 
</div>
</div>
        </div>
    </div>

`;
}


function TarTrendings(p, index) {
    let ContenedorTrend = document.getElementById("contenedorTrend");
    const trending = document.createElement("div");
    trending.classList.add("pelicula");

    trending.innerHTML = `
    <div class="pelicula">
  <div >
  <img src="${p.ImagenCarta}" class="portada">
  </div>
  <div class="info">
    <div class="calif">
    <div class="rtn">
    <h2> Ratings: </h2>
    </div>
   <div class="ratingestrellas">
 </div>
   </div>
    <div class="ssave">
   <img src="./iconos/baseline_bookmark_border_white_48dp.png" class="gurd">
   </div>
 </div>
   </div>
 `
;

const estrellaDiv = trending.querySelector('.ratingestrellas');

    if (p.Rating >= 4.5) {
        for (let i = 0; i < 5; i++) {
            const estrella = document.createElement('img');
            estrella.src = "./iconos/baseline_star_white_48dp.png";
            estrella.classList.add('star');
            estrellaDiv.appendChild(estrella);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            const estrella = document.createElement('img');
            estrella.src = "./iconos/baseline_star_white_48dp.png";
            estrella.classList.add('star');
            estrellaDiv.appendChild(estrella);
        }

        const estrellaVacia = document.createElement('img');
        estrellaVacia.src = "./iconos/baseline_star_outline_white_48dp.png";
        estrellaVacia.classList.add('star');
        estrellaDiv.appendChild(estrellaVacia);
}

trending.addEventListener("click", function () {
    BannerPeli(p);
});

ContenedorTrend.appendChild(trending);
}

BannerPeli(data[0]);

for (let i = 0; i < filarecomendados.length; i++) {
    TarRecomendados(filarecomendados[i], i);
}

for (let i = 0; i < filatrending.length; i++) {
    TarTrendings(filatrending[i], i);
}