const title = document.querySelector("h1");

document.getElementById("nao").addEventListener("click", ()=>{
    title.textContent = "Não me ama mais ;-;";
})

document.getElementById("sim").addEventListener("click", () =>{
    const button = document.getElementById("sim");
    const spaceWidth = document.body.offsetWidth-200;
    const spaceHeight = document.body.offsetHeight-200;

    button.style.position = "absolute";
    button.classList.remove("w-100");
    button.style.top = Math.round(Math.random() * spaceHeight) + "px";
    button.style.left = Math.round(Math.random() * spaceWidth) + "px";
})