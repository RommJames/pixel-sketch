// Get DOM
const sketchPadHTML = document.querySelector("#sketch-pad");
const sizeValue = document.querySelector("#size-value");
const sizeLabelHTML = document.querySelector("#size-label");
const brushColorValueHTML = document.querySelector("#brush-color-value");
const btnBrushRainbowHTML = document.querySelector("#btn-brush-rainbow");
const eraserBtnHTML = document.querySelector("#eraser-btn");
const clearBtnHTML = document.querySelector("#clear-btn");
const allBtnToggle = document.querySelectorAll(".btn-toggle");
const btnBrushColorLabel = document.querySelector("#brush-color-label");

// primitive data
let pixelSizeValue = 16
let paintAction = "mouseover" // click or mouseover
let brushColorValue = "black"
let randomize = false
let rainbowColors = ["#ff9f9f", "#ffcc9f", "#ffff9f", "#9fff9f", "#9f9fff", "#c9a0ff", "#ff9fcd"]

// Pixel Sketch Pad Creation
updateSketchPadArea(pixelSizeValue)
function updateSketchPadArea(pixelSize){
    sizeLabelHTML.textContent = `${pixelSize} x ${pixelSize}`
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
                let color

                if(randomize){
                    let randomIndexRainbow = Math.ceil(Math.random() * rainbowColors.length - 1);
                    let getRainbowColor = rainbowColors[randomIndexRainbow];
                    color = getRainbowColor
                }else{
                    color = brushColorValue
                }
                                
                brushColor(makePixelPadHTML, color);
            })
    
        }
    
    }
}

// Brush Color
function brushColor(pixelPad, brushColor){
    pixelPad.style.background = brushColor
}


// Dynamic Pixel Pad in Sketch Pad
sizeValue.addEventListener("change", (e)=>{    
    pixelSizeValue = e.target.value

    updateSketchPadArea(pixelSizeValue)

})

// Dynamic Brush Color
brushColorValueHTML.addEventListener("change", (e)=>{
    let value = e.target.value;

    brushColorValue = value
})

// Eraser Tool
eraserBtnHTML.addEventListener("click", (e)=>{

    brushColorValue = "white"        

   eraserBtnHTML.classList.add("active-btn");
   btnBrushColorLabel.classList.remove("active-btn");
   btnBrushRainbowHTML.classList.remove("active-rainbow-btn");
   randomize = false
})

// Brush Color
btnBrushColorLabel.addEventListener("click", (e)=>{

    brushColorValue = brushColorValueHTML.value

   eraserBtnHTML.classList.remove("active-btn");
   btnBrushColorLabel.classList.add("active-btn");
   btnBrushRainbowHTML.classList.remove("active-rainbow-btn");
    randomize = false
})

// Rainbow Brush Button
btnBrushRainbowHTML.addEventListener("click", (e)=>{
    eraserBtnHTML.classList.remove("active-btn");
    btnBrushColorLabel.classList.remove("active-btn");
    btnBrushRainbowHTML.classList.add("active-rainbow-btn");
    randomize = true
})

// Clear Button

clearBtnHTML.addEventListener("click", (e)=>{

    updateSketchPadArea(pixelSizeValue)    

})

// Slider Effect
let tempSliderValue
let progress
dynamicSlider()
sizeValue.addEventListener("input", dynamicSlider)

function dynamicSlider(){
    tempSliderValue = sizeValue.value
    progress = (tempSliderValue / sizeValue.max) * 100;
    sizeValue.style.background = `linear-gradient(to right, #c87fdd ${progress}%, white ${progress}%)`;
}


// testing debug area

