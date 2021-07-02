const piedra = document.querySelector('#rock');
const papel = document.querySelector('#paper');
const tijera = document.querySelector('#scissors');
const interrogant = document.querySelector('#random-result');
const actualResult = document.querySelector('#actual-result');
var wincounter = 0, losecounter = 0, drawcounter = 0; 
const manos = ["./img/rock.png","./img/paper.png","./img/scissors.png"];

function seleccionMano(manoID){
    interrogant.src = manos[Math.floor(Math.random() * manos.length)];
    handleOptions(manoID);
    //vuelve a cambiar al src al cabo de 1500 milisegundos para volver a poner el interrogante de imagen
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

function changeBackground(idHandoption){
    document.getElementById(idHandoption).style.backgroundColor = "#fc9831";
    interrogant.style.backgroundColor = "#fc9831";
    interrogant.style.borderRadius = "50%";
    setTimeout(() => {
        document.getElementById(idHandoption).style.backgroundColor = "#fdc48a";
        interrogant.style.backgroundColor = "#fdc48a";
        
    },1500);
}

