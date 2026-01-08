const countEL = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("op");
const rad = document.getElementById("random");
const heh = document.getElementById("ko");
inc.addEventListener("click", function(){
    countEL.innerText++;
})
dec.addEventListener("click", function(){
    countEL.innerText--;
})
res.addEventListener("click", function(){
    countEL.innerText = 0;
})
rad.addEventListener("click", function(){
    countEL.innerText = parseInt(Math.random() * 100);
})
heh.addEventListener("click", function(){
    countEL.innerText = 67;
})
