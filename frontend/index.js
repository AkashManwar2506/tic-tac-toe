let player = 'X';

function changePlayer(){
    return player === 'X'? 'O': 'X';
}

let tileArr = document.querySelectorAll(".tile");
tileArr.forEach(element => {
    element.addEventListener('click', ()=>{
        let box = document.getElementById(element.id);
        if (box.innerHTML==''){
            box.innerHTML=player;
            if (checkWin()){
                document.querySelector("#container > span").innerHTML = `<h1>${player} Wins</h1>`;
                return;
            }
            // checkWin();
            player=changePlayer();
        }
    })
    
});
let winningArr = [
    ['0', '1', '2'],['3', '4', '5'],['6', '7', '8'],['0', '3', '6'],['1', '4', '7'],
    ['2', '5', '8'],['0', '4', '8'],['2', '4', '6']
]
function checkWin(){
    winningArr.forEach(e =>{
        let box1 = document.getElementById(e[0]).innerText;
        let box2 = document.getElementById(e[1]).innerText;
        let box3 = document.getElementById(e[2]).innerText;
        if (box1==box2 && box1==box3 && box1!=''){
            return true;
        }
        return false;
    })
}