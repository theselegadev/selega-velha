
const input_player1 = document.getElementById('input-player01')
const input_player2 = document.getElementById('input-player02')

const btn_X_P1 = document.getElementById('btn-x-p1')
const btn_O_P1 =  document.getElementById('btn-o-p1')
const btn_S_P1 = document.getElementById('btn-s-p1')

const btn_X_P2 = document.getElementById('btn-x-p2')
const btn_O_P2 =  document.getElementById('btn-o-p2')
const btn_S_P2 = document.getElementById('btn-s-p2')

const btn_play = document.getElementById('btn-play')

let choice_player1
let choice_player2

window.onload = function (){
    localStorage.clear()
    localStorage.removeItem('player1')
    localStorage.removeItem('player2')
}

function verify(inpP1,inpP2){
    if(inpP1.value != 0 && inpP2.value != 0){
        return true
    }else{
        return false
    }
}

function verifyChoices(c,player){
    if(player == 'player1'){
        if(c == 'X'){
            btn_X_P2.style.display = 'none'
            btn_X_P1.style.background = 'rgb(121, 184, 168)'
            btn_X_P1.style.color = 'white'
            btn_O_P1.style.display = 'none'
            btn_S_P1.style.display = 'none'
        }else if(c == 'O'){
            btn_O_P2.style.display = 'none'
            btn_O_P1.style.background = 'rgb(121, 184, 168)'
            btn_O_P1.style.color = 'white'
            btn_X_P1.style.display = 'none'
            btn_S_P1.style.display = 'none'
        }else{
            btn_S_P2.style.display = 'none'
            btn_S_P1.style.background = 'rgb(121, 184, 168)'
            btn_S_P1.style.color = 'white'
            btn_O_P1.style.display = 'none'
            btn_X_P1.style.display = 'none'
        }
    }else{
        if(c == 'X'){
            btn_X_P1.style.display = 'none'
            btn_X_P2.style.background = 'rgb(121, 184, 168)'
            btn_X_P2.style.color = 'white'
            btn_O_P2.style.display = 'none'
            btn_S_P2.style.display = 'none'
        }else if(c == 'O'){
            btn_O_P1.style.display = 'none'
            btn_O_P2.style.background = 'rgb(121, 184, 168)'
            btn_O_P2.style.color = 'white'
            btn_X_P2.style.display = 'none'
            btn_S_P2.style.display = 'none'
        }else{
            btn_S_P1.style.display = 'none'
            btn_S_P2.style.background = 'rgb(121, 184, 168)'
            btn_S_P2.style.color = 'white'
            btn_O_P2.style.display = 'none'
            btn_X_P2.style.display = 'none'
        }
    }
}

function verifyALL(){
    if(verify(input_player1,input_player2)){
        if(localStorage.getItem('player1') != null && localStorage.getItem('player2') != null){
            return true;
        }
    }
}

function save (value,player,e){
    if(verify(input_player1,input_player2)){
        localStorage.setItem(player,value)
        if(player == 'player1'){
            localStorage.setItem('name_player1',input_player1.value)
            choice_player1 = localStorage.getItem(player)
            verifyChoices(choice_player1,player)
            
        }else{
            localStorage.setItem('name_player2',input_player2.value)
            choice_player2 = localStorage.getItem(player)
            verifyChoices(choice_player2,player)
        }
    }else{
        alert('[ERRO] Informe o nome dos jogadores')
    }
    if(verifyALL()){
        btn_play.style.display = 'block'
    }
}
