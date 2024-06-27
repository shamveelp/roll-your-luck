const mybtn = document.getElementById("mybtn");
const mylabel = document.getElementById("mylabel");

const max = 6;
const min = 1;

let Randomnum;

mybtn.onclick = function(){
    Randomnum = Math.floor(Math.random() * max) + min

    mylabel.textContent = Randomnum
    
}

