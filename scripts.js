const time = document.querySelector('.time')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')
const cast = document.querySelector('.cast')
const castList = document.querySelector('.cast-div ul')

let startTime, elapsedTime = 0
let validInterval, castIndex = 1
let paused = true

function stopWatch(time){
    const date = new Date(time)
    const hours = date.getUTCHours().toString().padStart(2, '0')
    const minutes = date.getUTCMinutes().toString().padStart(2, '0')
    const seconds = date.getUTCSeconds().toString().padStart(2, '0')
    const miliseconds = date.getUTCMilliseconds().toString().padStart(3, '0')
    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

function Watch(){
    elapsedTime = Date.now() - startTime
    time.textContent = stopWatch(elapsedTime)
}

function startTimer(){
    startTime = Date.now() - elapsedTime
    validInterval = setInterval(Watch, 10)
    paused = false
}

function pauseTimer(){
    clearInterval(validInterval)
    paused = true
}
function resetTimer(){
    clearInterval(validInterval)
    elapsedTime = 0
    time.textContent = '00:00:00:000'
    paused = true
    castIndex = 1
    castList.innerHTML = ''
}

function castTimer(){
    if(!paused){
        const castTime = stopWatch(elapsedTime)
        const castItem = document.createElement('li')
        castItem.textContent = `CAST ${castIndex} - ${castTime}`
        castList.appendChild(castItem)
        castIndex++
    }
}

start.addEventListener('click', startTimer)
pause.addEventListener('click', pauseTimer)
reset.addEventListener('click', resetTimer)
cast.addEventListener('click', castTimer)