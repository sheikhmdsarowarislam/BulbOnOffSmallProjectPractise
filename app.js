const CatchTurnOnButton = document.getElementById("bulbTurnOn").addEventListener('click', function(){
    document.getElementById("myImage").src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    
})

const CatchTurnOffButton = document.getElementById("bulbTurnOff").addEventListener('click', function(){
    document.getElementById("myImage").src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    
})