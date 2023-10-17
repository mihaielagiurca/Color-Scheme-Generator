
const button = document.getElementById('button')
button.addEventListener('click', addScheme)

function getColor(){
    let inputColor = document.getElementById('input-color')
    let color = inputColor.value
    let newColor = color.replace('#', '')//removed the "#" symbol from the color code          
    return newColor
}

function getMode(){
    let colorMode = document.getElementById('color-scheme')
    let mode = colorMode.value 
    return mode
}

function display(){ 
    fetch(`https://www.thecolorapi.com/scheme?hex=E82626&mode=monochrome`)
        .then(response => response.json())
        .then(data => {
            renderColor(data)
        })  
}

display()
    
function renderColor(data){
        let colorsDisplay = ""
        let colorsHexDisplay = ""
        for (let scheme of data.colors){
            colorsDisplay += `<div class="colorSchemeDisplay" style="background-color:${scheme.hex.value}"> </div>`
            colorsHexDisplay+= `<div class="colorHexDisplay">${scheme.hex.value}</div>`
        }
        document.getElementById('color-scheme-display').innerHTML = colorsDisplay
        document.getElementById('color-hex-display').innerHTML = colorsHexDisplay
}

function addScheme(){        
    fetch(`https://www.thecolorapi.com/scheme?hex=${getColor()}&mode=${getMode()}`)
        .then(response => response.json())
        .then(data => {
             renderColor(data)
        })
}

    