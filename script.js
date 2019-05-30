const container = document.querySelector('#items-cardapio')
fetch(`http://localhost:3000/comidas`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{

        data.pratosFavoritos.forEach(prato => {
            console.log(prato)

            const mediaItem = document.createElement('div');
            mediaItem.setAttribute('class', 'media mb-4');
            mediaItem.innerHTML = `
            <img src="${prato.imagem}" alt="${prato.nome}" class="mr-3 img-thumbnail" width="200px">

            <div class="media-body>

                <h5 class="mt-0"><strong>${prato.nome}</strong></h5>
                ${prato.descricao}
              </div>`
              container.appendChild(mediaItem);
        }
        )
    }
    )
    .catch((erro)=>{
        console.log(erro)
    })