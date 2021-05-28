'use strict';

/*
document.querySelector('.aboutThe').textContent = 'About the creator'
document.querySelector('.life').textContent = 200
document.querySelector('.hintMes').textContent = 'You guessed high!'
document.querySelector('.guessNum').value = 35
*/

var number = 100, c = 0,

hintMes = document.querySelector('.hintMes'),
n = document.querySelector('.guessNum'), 
highScore = document.querySelector('.highScore'),
score = document.querySelector('.score'),
first = true,
values = [10, -10, 100, -100, 5, -5, 50, -50, 1, -1, 2, -2, 500, -500, 20, -20, 200, -200]

function emphasize(){
    if (c%2 === 0){
        hintMes.style.color = 'white'
    }
    
        
    else{
        hintMes.style.color = 'black'
    }
    c++
}

const reset = () =>{
    number = parseInt((Math.random() * 1000))
    document.querySelector('.developer').hidden = true
    hintMes.style.fontSize = '50px'
    score.textContent = 20
    first = true
    n.textContent = 0
    document.querySelector('body').style.backgroundColor = 'gray'
    guessed()
}


const newGame = ()=> {
    document.querySelector('.ngb').hidden = false
    document.querySelector('.ngb').addEventListener('click', reset)
}


const guessed = () => {
    
    var guess = n.textContent, correct = guess == number
    if (correct) {
        document.querySelector('body').style.backgroundColor = 'green'
        hintMes.textContent = "correct !!"
        hintMes.style.fontSize = '100px'
        if (score.textContent > highScore.textContent){
     		highScore.textContent = score.textContent
        }
        newGame()
        document.querySelector('.developer').hidden = false
        
    } else if (guess < number) {
        hintMes.textContent = Math.abs(guess - number) >= 100 ? "Your guess is too low [missed by more than 100] !!" : "Your guess is Low !!"
        // hintMes.style.fontSize = '50px'
    } else {
        hintMes.textContent = Math.abs(guess - number) >= 100 ? "Your guess is too high [missed by more than 100] !!" : "Your guess is High !!"
        //hintMes.style.fontSize = '100px'
    }
    if (!correct && !first){
        --score.textContent
        document.querySelector('body').style.backgroundColor = 'red'
    }
    first = false
}

reset()

// document.querySelector('.btn').addEventListener('click', guessed)

for(let i=0; i<values.length; i++){
    var pm = '.p'
    if (values[i] < 0)
        pm = '.m'
    var classes = pm + Math.abs(values[i])
    document.querySelector(classes).addEventListener('click', ()=>{n.textContent = +n.textContent + values[i]; guessed();})
}
    
setInterval(emphasize, 500)
