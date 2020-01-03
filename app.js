var scores,max_score,round_score,active_player,dice,gamePlaying ;

//document.querySelector('.input').style.display = 'None';
//gamePlaying = true;
function reset(){
    max_score = prompt("ENTER THE WINNING SCORE");
//max_score = document.getElementById('ip').value;
if(max_score){

gamePlaying = true;
scores = [0,0];
round_score = 0;
active_player = 0;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.dice').style.display = 'None';
document.querySelector('.dice2').style.display = 'None';
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.getElementById('name-0').textContent = "PLAYER 1";
document.getElementById('name-1').textContent = "PLAYER 2";

}else{
    alert("Enter the winning score to continue")
}}


function nextPlayer(){
    active_player === 0 ? active_player = 1 : active_player = 0;
    round_score = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'None';
    document.querySelector('.dice2').style.display = 'None';

}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    var dice = Math.floor(Math.random(Number)*6)+1;
    var dice2 = Math.floor(Math.random(Number)*6)+1;
    var diceDOM = document.querySelector('.dice');
    var dice2DOM = document.querySelector('.dice2');
    diceDOM.style.display = 'block';
    dice2DOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    dice2DOM.src = 'dice-'+dice2+'.png';
    if(dice !== 1 && dice2 !== 1){
        round_score += (dice+dice2);
        document.querySelector('#current-'+active_player).textContent = round_score;
        
    }else{
        round_score = 0;
        scores[active_player] += round_score;
        document.getElementById('score-'+active_player).textContent = scores[active_player];
        nextPlayer();
    }}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    scores[active_player] += round_score;
    document.getElementById('score-'+active_player).textContent = scores[active_player];
    if (scores[active_player] >= max_score){
        
        document.getElementById('name-'+active_player).textContent = "WINNER";
        document.querySelector('.dice').style.display = 'None';
        document.querySelector('.dice2').style.display = 'None';
        document.querySelector('.player-'+active_player+'-panel').classList.add('winner');
        gamePlaying = false;
    }
    else{ 
    nextPlayer();}}
});

document.querySelector('.btn-new').addEventListener('click',reset);