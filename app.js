const piedra = document.querySelector('#rock');
const papel = document.querySelector('#paper');
const tijera = document.querySelector('#scissors');
const interrogant = document.querySelector('#random-result');
const actualResult = document.querySelector('#actual-result');
var wincounter = 0, losecounter = 0, drawcounter = 0; 
var bloqueo = false;
const manos = ["./img/rock.png","./img/paper.png","./img/scissors.png"];

function seleccionMano(manoID){
    interrogant.src = manos[Math.floor(Math.random() * manos.length)];
    handleOptions(manoID);
    setTimeout(() => {
        interrogant.src = "./img/interrogante.png";
    },1500);
};

function handleRock(manoID){
    if (interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/rock.png" && manoID === "paper"){                //1
        wincounter++;
        actualResult.style.color = "green";
        actualResult.innerHTML = "¡HAS GANADO!"
    }else if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/rock.png" && manoID === "rock"){           //2         
        drawcounter++;
        actualResult.style.color = "blue";
        actualResult.innerHTML = "¡HAS EMPATADO!"
    }else if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/rock.png" && manoID === "scissors"){        //3
        losecounter++;
        actualResult.style.color = "red";
        actualResult.innerHTML = "¡HAS PERDIDO!"
    }
}

function handlePaper(manoID){
    if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/paper.png" && manoID === "scissors"){        //4
        wincounter++;
        actualResult.style.color = "green";
        actualResult.innerHTML = "¡HAS GANADO!"
    }else if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/paper.png" && manoID === "paper"){       //5
        drawcounter++;
        actualResult.style.color = "blue";
        actualResult.innerHTML = "¡HAS EMPATADO!"
    }else if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/paper.png" && manoID === "rock"){           //6
        losecounter++;
        actualResult.style.color = "red";
        actualResult.innerHTML = "¡HAS PERDIDO!"
    }
}

function handleScissors(manoID){
    if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/scissors.png" && manoID === "rock"){    //7
        wincounter++;
        actualResult.style.color = "green";
        actualResult.innerHTML = "¡HAS GANADO!"
    }else if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/scissors.png" && manoID === "scissors"){        //8
        drawcounter++;
        actualResult.style.color = "blue";
        actualResult.innerHTML = "¡HAS EMPATADO!"
    }else if(interrogant.src === "file:///C:/Users/Sergio/Desktop/piedra-papel-tijera/img/scissors.png" && manoID === "paper"){    //9
        losecounter++;
        actualResult.style.color = "red";
        actualResult.innerHTML = "¡HAS PERDIDO!"
    }
}

function handleOptions(manoID){
    handleRock(manoID);
    handlePaper(manoID);
    handleScissors(manoID);
    renderCounter();
}

function renderCounter(){
    document.querySelector('#victorias').innerHTML = wincounter;
    document.querySelector('#empates').innerHTML = drawcounter;
    document.querySelector('#derrotas').innerHTML = losecounter;
}

function changeBackground(manoID){
    document.getElementById(manoID).style.backgroundColor = "#fc9831";
    interrogant.style.backgroundColor = "#fc9831";
    interrogant.style.borderRadius = "50%";
    setTimeout(() => {
        document.getElementById(manoID).style.backgroundColor = "#fdc48a";
        interrogant.style.backgroundColor = "#fdc48a";
    },2000);
}

function init(manoID){
    if(!bloqueo){
        bloqueo = true;
        changeBackground(manoID);
        seleccionMano(manoID);
        setTimeout(() => {
            bloqueo = false;
        },2000);
    }
}