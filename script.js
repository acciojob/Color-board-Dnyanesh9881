//your JS code here. If required.
let cont=document.querySelector(".container");

for(let i=0;i<800;i++){
	let squar=document.createElement("div");
	squar.addEventListener("mouseover", onMouseOver);
	squar.classList="square";
	cont.appendChild(squar);
}
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 
function onMouseOver(event) {
	
      event.target.style.fill = rgb(253,201,33);
