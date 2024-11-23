const play_player1 = document.getElementById('player1')
const play_player2 = document.getElementById('player2')
const name_player1 = localStorage.getItem('name_player1')
const name_player2 = localStorage.getItem('name_player2')
const card_choice = document.getElementById('box-choice')
const background = document.getElementById('background')
const box_choice_user = document.getElementById('choice-user')
const choice_player1 = localStorage.getItem('player1')
const choice_player2 = localStorage.getItem('player2')
const box_name_player = document.getElementById('name-player')
const list_position = document.querySelectorAll('.position')
const box_winner = document.getElementById('box-winner')
const text_winner = document.getElementById('text-winner')
const box_velha = document.getElementById('box-velha')
const grid = document.getElementById('grid')

let play_player
let cont = 0

document.addEventListener('DOMContentLoaded',()=>{
    grid.style.display = "none"
})

play_player1.innerText = name_player1
play_player2.innerText = name_player2

play_player1.addEventListener('click',()=>{
    play_player = "player1"
    card_choice.style.display = 'none'
    background.style.filter = "blur(0)"
    box_choice_user.value = choice_player1
    box_name_player.innerText= name_player1
    grid.style.display = "grid"
})
play_player2.addEventListener('click',()=>{
    play_player = "player2"
    card_choice.style.display = 'none'
    background.style.filter = "blur(0)"
    box_choice_user.value = choice_player2
    box_name_player.innerText = name_player2
    grid.style.display = "grid"
})

function verifyWinner(arr){
    if(arr[0].innerHTML!="" && arr[1].innerHTML!="" && arr[1].innerHTML!= "" && arr[2].innerHTML!= "" && arr[0].innerHTML === arr[1].innerHTML && arr[1].innerHTML === arr[2].inneHTMLinnerHTMLt){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[0].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[3].innerHTML!="" && arr[4].innerHTML!="" && arr[4].innerHTML!="" && arr[5].innerHTML!="" && arr[3].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[5].innerHTML){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[3].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[6].innerHTML!="" && arr[7].innerHTML!="" && arr[7].innerHTML!="" && arr[8].innerHTML!="" &&  arr[6].innerHTML === arr[7].innerHTML && arr[7].innerHTML === arr[8].innerHTML){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[6].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[0].innerHTML!="" && arr[3].innerHTML!="" && arr[3].innerHTML!="" && arr[6].innerHTML!="" &&  arr[0].innerHTML === arr[3].innerHTML && arr[3].innerHTML === arr[6].innerHTML){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)";
            if(arr[0].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[1].innerHTML!="" && arr[4].innerHTML!="" && arr[4].innerHTML!="" && arr[7].innerHTML!="" &&  arr[1].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[7].innerHTML){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[1].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[2].innerHTML!="" && arr[5].innerHTML!="" && arr[5].innerHTML!="" && arr[8].innerHTML!="" &&  arr[2].innerHTML === arr[5].innerHTML && arr[5].innerHTML === arr[8].innerHTML){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[2].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[0].innerHTML!="" && arr[4].innerHTML!="" && arr[4].innerHTML!="" && arr[8].innerHTML!="" &&  arr[0].innerHTML === arr[4].innerHTML && arr[4].innerHTML === arr[8].innerText){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[0].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[2].innerHTML!="" && arr[4].innerHTML!="" && arr[4].innerHTML!="" && arr[6].innerHTML!="" &&  arr[2].innerText === arr[4].innerHTML && arr[4].innerHTML === arr[6].innerText){
        box_winner.style.display = "block";
        (function(){
            background.style.filter = "blur(20px)"
            if(arr[2].innerHTML == choice_player1){
                text_winner.innerText = `Parabéns ${name_player1} você ganhou`
            }else{
                text_winner.innerText = `Parabéns ${name_player2} você ganhou`
            }
        }());
    }else if(arr[0].innerHTML != "" && arr[1].innerHTML != "" && arr[2].innerHTML != "" && arr[3].innerHTML != "" && arr[4].innerHTML != "" && arr[5].innerHTML != "" && arr[6].innerHTML != "" && arr[7].innerHTML != "" && arr[8].innerHTML != ""){
        box_velha.style.display = "block"
        background.style.filter = "blur(20px)"
    }
}

function show(e){
    if(play_player == "player1"){
        if(cont%2==0){
            e.innerHTML = choice_player1
            box_choice_user.value = choice_player2
            box_name_player.innerText= name_player2
            e.removeAttribute('onclick')
        }else{
            e.innerHTML = choice_player2
            box_choice_user.value = choice_player1
            box_name_player.innerText= name_player1
            e.removeAttribute('onclick')
        }
        cont++
    }else{
        if(cont%2==0){
            e.innerHTML = choice_player2
            box_choice_user.value = choice_player1
            box_name_player.innerText= name_player1
            e.removeAttribute('onclick')
        }else{
            e.innerHTML = choice_player1
            box_choice_user.value = choice_player2
            box_name_player.innerText= name_player2
            e.removeAttribute('onclick')
        }
        cont++
    }
    verifyWinner(list_position)
}