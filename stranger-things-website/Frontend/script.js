const body = document.body
const particles = document.getElementById("particles")
const text = document.getElementById("upsideText")

function toggleUpsideDown(){

body.classList.toggle("upsideDown")

if(body.classList.contains("upsideDown")){
text.innerText="Everything is as it seems?"
}
else{
text.innerText=""
}

}

/* SPORE PARTICLES */

for(let i=0;i<70;i++){

let particle=document.createElement("div")

particle.classList.add("particle")

particle.style.left=Math.random()*100+"%"

particle.style.animationDuration=5+Math.random()*10+"s"

particle.style.opacity=Math.random()

particles.appendChild(particle)

}