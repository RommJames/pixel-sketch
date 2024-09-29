// Get DOM
const sketchPadHTML = document.querySelector("#sketch-pad");

// primitive data
let pixelSizeValue = 16
let paintAction = "mouseover" // click or mouseover

// Pixel Sketch Pad Creation
updateSketchPadArea(pixelSizeValue)
function updateSketchPadArea(pixelSize){
    sketchPadHTML.innerHTML = ""
    for(let row = 1; row <= pixelSize; row++){
        const makePixelPadRowHTML = document.createElement("div");
        makePixelPadRowHTML.setAttribute("class", "pixel-pad-row");
        sketchPadHTML.appendChild(makePixelPadRowHTML)
        for (let col = 1; col <= pixelSize; col++) {
    
            const makePixelPadHTML = document.createElement("div");       
            makePixelPadHTML.setAttribute("class", "pixel-pad");
            makePixelPadRowHTML.appendChild(makePixelPadHTML);
            
            makePixelPadHTML.addEventListener(paintAction,(e)=>{
                brushColor(makePixelPadHTML)
            })
    
        }
    
    }
}

// Brush Color
function brushColor(pixelPad){
    pixelPad.style.background = "black"
}


// testing debug area
const sizeValue = document.querySelector("#size-value");
sizeValue.addEventListener("keyup", (e)=>{
    let value = e.target.value
    
    updateSketchPadArea(value)
    // alert(e.target.value)
})
