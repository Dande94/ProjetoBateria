//reconhecimento das teclas clicadas
document.body.addEventListener('keyup', (event)=>{//monitorar todos os eventos de keyup no body da página(documento) ;
    //console.log(event.code);//apartir do event captura a tecla soltada depoisde pressionada;
    playSound(event.code.toLowerCase());// com a captura da tecla, a mesma é passada via parametro(transfomada em letras minusculas) para a função playSound;
})

document.querySelector('.composer button').addEventListener('click',()=>{//monitorar os eventos de click no botão com class composer;
    let song = document.querySelector('#input').value;//capturar o valor dentro do input
    //console.log(song);//mostra do console os valores capturados
    if(song !==''){
        let songArray = song.split('');//transformar o valor do input que é uma string em elementos de um array;
        //console.log(songArray);//mostrar no console os array gerado a partir do song;
        playComposition(songArray);
    }
})

function playSound(sound){//o code da tecla recebida aqui a mesma e armazenada em uma variável
    let audioElement = document.querySelector(`#s_${sound}`);//o code é setada dentro um padrão de template para quando for gerado já estar no modelo ddesejado e isso tudo de forma dinâmica, afim de forma o id do audio carregado lá no html;

    let keyElement = document.querySelector(`div[data-key="${sound}"]`);//capturar uma div com base no data-key que é gerado de forma automatica vinda do parametros sound;

    if(audioElement){//verificação de audio, pra saber se o template gerado existe entre os id do html nos arquivos de audio

        audioElement.currentTime = 0; // para zerar o tempo do audio, assim permitindo que audios mais longos possam ser cortatos e tocados vária vezes em um curto espaçode tempo;

        audioElement.play();//função play() para acionar tags de audio do html;
    }
    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{keyElement.classList.remove('active')},300);//como remover a class de maneira automática;
    }
}

function playComposition(songArray){
    let wait = 0;//variável para manipular o tempo de execução das batidas

    for(let songItem of songArray){//loop para percorrer o array das teclas identificdas
        setTimeout(()=>{//manipulação do tempo entre batidas
            playSound(`key${songItem}`);//geração da taga ser tocada na sequencia dentro do array
            //console.log(songItem)//veirficação da passagem dos itens do array
        },wait);

        wait+=250;//somatória de 1/4 de segundo para cada batida executada
    }
}