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
const hoverModeBtnHTML = document.querySelector("#hover-mode-btn");
const clickModeBtnHTML = document.querySelector("#click-mode-btn");
const drawFunctionalityHTML = document.querySelector("#draw-functionality");
const downloadHTML = document.querySelector("#download");
const exitShortcutHTML = document.querySelector("#exit");
const keyboardShortcutContainerHTML = document.querySelector("#keyboard-shortcut-container");
const otherInformationHTML = document.querySelector("#other-information");
const btnHideSettingHTML = document.querySelector("#setting-panel-hide-btn");
const settingPanelHTML = document.querySelector("#setting-panel");
const pixelSketchContainerHTML = document.querySelector("#pixel-sketch-container")
const showSettingBtnHTML = document.querySelector("#show-setting-btn")
const headerHTML = document.querySelector("header")

// primitive data
let pixelSizeValue = 16
let recentPaintAction = ""
let paintAction = "mouseover" // click or mouseover
let brushColorValue = "black"
let randomize = false
let rainbowColors = ["#ff9f9f", "#ffcc9f", "#ffff9f", "#9fff9f", "#9f9fff", "#c9a0ff", "#ff9fcd"]
let color
let showHideTrigger = true

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
                        
        
            makePixelPadHTML.addEventListener("click",(e)=>{                   

                if(paintAction === "click"){
                    pixelPadPaint(makePixelPadHTML, color)
                }
                
                
            })

            makePixelPadHTML.addEventListener("mouseover", (e)=>{

                if(paintAction === "mouseover"){
                    pixelPadPaint(makePixelPadHTML, color)
                }

            })
        }
    
    }
}

// Draw Function

function pixelPadPaint(pad, color){

        if(randomize){
            let randomIndexRainbow = Math.ceil(Math.random() * rainbowColors.length - 1);
            let getRainbowColor = rainbowColors[randomIndexRainbow];
            color = getRainbowColor
        }else{
            color = brushColorValue
        }

        brushColor(pad, color);
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

    eraserMode();
})

// Brush Color
btnBrushColorLabel.addEventListener("click", (e)=>{
    activateBrushColor()
})

// Rainbow Brush Button
btnBrushRainbowHTML.addEventListener("click", (e)=>{
    rainbowMode();
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

// Draw Functionality using Event Delegation
drawFunctionalityHTML.addEventListener("click", (e)=>{
    let target = e.target

    switch(target.id){
        case 'hover-mode-btn':
            hoverMode()
            break;
        case 'click-mode-btn':
            clickMode()                     
            break;
        
    }

        
})

// Keyboard Shortcut and download output
otherInformationHTML.addEventListener("click", (e)=>{
    let target = e.target

    switch(target.id){
        case "view-shortcuts-btn":
            keyboardShortcutContainerHTML.style.transform = "scaleY(1)"
            document.body.style.overflow = "hidden"
            break;
        case "download":
            // Download the output of the paint
            downloadAsPNG()
            break;

    }
})

// Download As PNG function
function downloadAsPNG() {    
                
    html2canvas(sketchPadHTML).then(canvas => {
        const link = document.createElement('a');
        link.download = 'myPixelSketch.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Keyboard Overview Exit
exitShortcutHTML.addEventListener("click", ()=>{
    exitShortcutView()

})

// Hide Button for Setting Panel
btnHideSettingHTML.addEventListener("click", ()=>{
    hideSetting()
})

// Show Button for Setting
showSettingBtnHTML.addEventListener("click", ()=>{
    showSetting()
})

showSettingBtnHTML.addEventListener("mouseover", ()=>{
    showSettingBtnHTML.style.opacity = "1"    
})

showSettingBtnHTML.addEventListener("mouseout", ()=>{
    setTimeout(() => {
        showSettingBtnHTML.style.opacity = "0.1"
    }, 500);    
})

// Keyboard Shortcut Event Listener
window.addEventListener("keyup", (e)=>{
    let key = e.key
    
    switch(key){
        case "1":
            hoverMode();
            break;
        case "2":
            clickMode();
            break;
        case "3":
            activateBrushColor();
            break;
        case "4":
            brushColorValueHTML.click();
            break;
        case "q":
            eraserMode()
            break;
        case "w":
            updateSketchPadArea(pixelSizeValue);  
            break;
        case "e":
            rainbowMode()
            break;
        case "a":
            showHideTrigger ? hideSetting() : showSetting();
            break;
        case "s":
            downloadAsPNG()
            break;
        case "Escape":
            exitShortcutView()
            break;
    }
})

// ----- Functions --------//
function hoverMode(){
    recentPaintAction = paintAction
    paintAction = "mouseover";
    hoverModeBtnHTML.classList.add("active-btn");
    clickModeBtnHTML.classList.remove("active-btn");
}

function clickMode(){
    recentPaintAction = paintAction
    paintAction = "click";
    hoverModeBtnHTML.classList.remove("active-btn");
    clickModeBtnHTML.classList.add("active-btn");   
}

function activateBrushColor(){

    brushColorValue = brushColorValueHTML.value

   eraserBtnHTML.classList.remove("active-btn");
   btnBrushColorLabel.classList.add("active-btn");
   btnBrushRainbowHTML.classList.remove("active-rainbow-btn");
    randomize = false
}

function eraserMode(){
    brushColorValue = "white"        

   eraserBtnHTML.classList.add("active-btn");
   btnBrushColorLabel.classList.remove("active-btn");
   btnBrushRainbowHTML.classList.remove("active-rainbow-btn");
   randomize = false
}

function rainbowMode(){
    eraserBtnHTML.classList.remove("active-btn");
    btnBrushColorLabel.classList.remove("active-btn");
    btnBrushRainbowHTML.classList.add("active-rainbow-btn");
    randomize = true
}

function showSetting(){
    settingPanelHTML.style.display = "inline-block"
    showSettingBtnHTML.style.transform = "scale(0)"
    showSettingBtnHTML.style.opacity = "1"    
    headerHTML.style.transform = "scale(1)"
    showHideTrigger = true;
}

function hideSetting(){
    settingPanelHTML.style.display = "none"
    showSettingBtnHTML.style.transform = "scale(1)"
    headerHTML.style.transform = "scale(0)"
    setTimeout(() => {
        showSettingBtnHTML.style.opacity = "0.1"
    }, 800);
    showHideTrigger = false;
}

function exitShortcutView(){
    keyboardShortcutContainerHTML.style.transform = "scaleY(0)";
    document.body.style.overflow = "visible";
}