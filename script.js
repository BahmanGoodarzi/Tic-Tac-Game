
const resetCell = document.querySelector('#return');
const cells = Array.from(document.querySelectorAll('.buttens > div'));
const runPlayer = document.querySelector('.turn > p');

let turn = 'x';
let isEnd = false;

const winingConditions = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8]
];


function checkWin (){
    let turnClass = "fill-" + turn;
    let isWon = winingConditions.some(function(winingCondition){
        let wining = winingCondition.every(function(index){
            return cells[index].classList.contains(turnClass);
        });
        if (wining) {
            for (let j = 0; j < winingCondition.length; j++) {
                cells[winingCondition[j]].classList.add("highlight-win");
            }
        }
        return wining
    });
    return isWon
}


function checkDrow() {
    drow = 0;
    
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        

        if (cell.classList.contains("fill-x") || cell.classList.contains("fill-o")) {
            drow++;
        }
    }
         if (drow === 9) {
             return true
        }
};

cells.forEach(function(i){
    i.addEventListener('click' , ()=>{
        if (isEnd) return;
        i.classList.add("fill-" + turn);

        if (checkWin()){
            runPlayer.innerHTML = turn.toUpperCase() + "-" + "WON";
            isEnd = true;
        }else if (checkDrow()){
            runPlayer.innerHTML = "DROW"
            isEnd = true;
        }else{
            turn = turn === 'x' ? 'o' : 'x';
            runPlayer.innerHTML = turn.toUpperCase() + "-" + "TURN";
        }
    },{once : true})
});

resetCell.addEventListener('click' , ()=>{
    resetCell.style.transform = "scale(.9)"
    location.reload();
});


let array = ["dad" , "david" , "soltan" , "HTML" , "CSS" , "JS"]

let arrays = array.filter(function(d){
    return d.startsWith('d') 
})
console.log(arrays);








