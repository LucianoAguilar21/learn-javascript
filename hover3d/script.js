const burger = document.getElementById('burger');

const height = burger.clientHeight;
const width = burger.clientWidth;

burger.addEventListener('mousemove', (evt)=>{
    const {layerX, layerY} = evt;

    const yRotation = (
        (layerX - width / 2) / width
    ) *20
    const xRotation = (
        (layerY - height / 2) / height
    ) *20


    const string  = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)
    `

    burger.style.transform = string;
})

burger.addEventListener('mouseout', ()=>{
    burger.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})