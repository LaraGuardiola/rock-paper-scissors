const piedra = document.querySelector('#rock')
const papel = document.querySelector('#paper')
const tijera = document.querySelector('#scissors')
const interrogant = document.querySelector('#random-result')
const actualResult = document.querySelector('#actual-result')
let wincounter = 0, losecounter = 0, drawcounter = 0 
let bloqueo = false
const manos = ["./img/rock.png","./img/paper.png","./img/scissors.png"]

function seleccionMano(manoID){
    interrogant.src = manos[Math.floor(Math.random() * manos.length)]
    handleOptions(manoID)
    setTimeout(() => {
        interrogant.src = "./img/interrogante.png"
    },2000)
}

function handleRock(manoID){
    if (interrogant.src.includes('scissors') && manoID === "rock"){                //1
        wincounter++
        actualResult.style.color = "green"
        actualResult.innerHTML = "¡HAS GANADO!"
    }else if(interrogant.src.includes('rock') && manoID === "rock"){           //2         
        drawcounter++
        actualResult.style.color = "blue"
        actualResult.innerHTML = "¡HAS EMPATADO!"
    }else if(interrogant.src.includes('paper') && manoID === "rock"){        //3
        losecounter++
        actualResult.style.color = "red"
        actualResult.innerHTML = "¡HAS PERDIDO!"
    }
}

function handlePaper(manoID){
    if(interrogant.src.includes('rock') && manoID === "paper"){        //4
        wincounter++
        actualResult.style.color = "green"
        actualResult.innerHTML = "¡HAS GANADO!"
    }else if(interrogant.src.includes('paper') && manoID === "paper"){       //5
        drawcounter++
        actualResult.style.color = "blue"
        actualResult.innerHTML = "¡HAS EMPATADO!"
    }else if(interrogant.src.includes('scissors') && manoID === "paper"){           //6
        losecounter++
        actualResult.style.color = "red"
        actualResult.innerHTML = "¡HAS PERDIDO!"
    }
}

function handleScissors(manoID){
    if(interrogant.src.includes('paper') && manoID === "scissors"){    //7
        wincounter++
        actualResult.style.color = "green"
        actualResult.innerHTML = "¡HAS GANADO!"
    }else if(interrogant.src.includes('scissors') && manoID === "scissors"){        //8
        drawcounter++
        actualResult.style.color = "blue"
        actualResult.innerHTML = "¡HAS EMPATADO!"
    }else if(interrogant.src.includes('rock') && manoID === "scissors"){    //9
        losecounter++
        actualResult.style.color = "red"
        actualResult.innerHTML = "¡HAS PERDIDO!"
    }
}

function handleOptions(manoID){
    switch(manoID){
        case 'rock':
            handleRock(manoID)
            break
        case 'paper':
            handlePaper(manoID)
            break    
        case 'scissors':
            handleScissors(manoID)
            break
    }
    renderCounter()
}

function renderCounter(){
    document.querySelector('#victorias').innerHTML = wincounter
    document.querySelector('#empates').innerHTML = drawcounter
    document.querySelector('#derrotas').innerHTML = losecounter
}

function changeBackground(manoID){
    document.getElementById(manoID).style.backgroundColor = "#fc9831"
    interrogant.style.backgroundColor = "#fc9831"
    interrogant.style.borderRadius = "50%"
    setTimeout(() => {
        document.getElementById(manoID).style.backgroundColor = "#fdc48a"
        interrogant.style.backgroundColor = "#fdc48a"
    },2000)
}

function isGameBlocked(){
    return bloqueo
}

function blockGame(){
    bloqueo = true
}

function init(manoID){
    if(!isGameBlocked()){
        blockGame()
        changeBackground(manoID)
        seleccionMano(manoID)
        setTimeout(() => {
            bloqueo = false
        },2000)
    }
}