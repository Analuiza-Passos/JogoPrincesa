const Princesa = document.querySelector('.Princesa');
const pipe = document.querySelector('.pipe');

const jump = () => {
    Princesa.classList.add('jump');

    setTimeout(()=> {
        Princesa.classList.remove('jump');

    },500 );

}

const loop = setInterval(() => {

    console.log ('loop')

    const pipePosition = pipe.offsetLeft;
    const PrincesaPosition = +window.getComputedStyle(Princesa).bottom.replace('px','');

    console.log(pipePosition);
   
    if (pipePosition <= 120 && pipePosition > 0 && PrincesaPosition < 60) {


        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;


        Princesa.style.animation = 'nome';
        Princesa.style.bottom = `${PrincesaPosition}px`;

        Princesa.src = "./imagens/gameover2.png"
        Princesa.style.width= '70px'
        Princesa.style.marginLeft= '30px'

        clearInterval(loop);

            
    }

}, 10);


document.addEventListener('keydown',jump);