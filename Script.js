let canvas = document.querySelector("canvas")
canvas.height = window.innerHeight
canvas.width= window.innerWidth

let tool = canvas.getContext("2d");
let isMouseDown = false
// tool.fillStyle="black"
// tool.fillRect(0,0,canvas.height/2,canvas.width/2)
tool.strokeStyle="#800000"
canvas.addEventListener("mousedown",function(e){
    tool.beginPath()
    isMouseDown=true
    tool.moveTo(e.clientX,getCoordinatesy(e.clientY))
})
canvas.addEventListener("mouseup",function(e){
    isMouseDown=false
})
canvas.addEventListener("mousemove",function(e){
    if(isMouseDown){
        tool.lineTo(e.clientX,getCoordinatesy(e.clientY))
        tool.stroke()
    }
})
canvas.addEventListener("touchstart",function(e){
    e.preventDefault()
    tool.beginPath()
    isMouseDown=true
    tool.moveTo(e.touches[0].clientX,getCoordinatesy(e.touches[0].clientY))
})
canvas.addEventListener("touchend",function(e){
    e.preventDefault()
    isMouseDown=false
})
canvas.addEventListener("touchmove",function(e){
    if(isMouseDown){
        e.preventDefault()
        tool.lineTo(e.touches[0].clientX,getCoordinatesy(e.touches[0].clientY))
        tool.stroke()
    }
})
let options = document.querySelectorAll(".tool")
for(let i =0;i< options.length;i++){
    options[i].addEventListener("click",function(e){
        console.log("hhh")
        let option = e.currentTarget
        let name = option.getAttribute("id")
        if (name == "eraser"){
            tool.strokeStyle = "white"
        }else if(name == "pencil"){
            tool.strokeStyle="black"
        }else if(name =="black1"){
            tool.lineWidth=0
        }
        else if(name =="black2"){
            tool.lineWidth=7
        }
        else if(name =="black3"){
            tool.lineWidth=20
        }else{
            var backRGB = document.getElementById("colorpicker").value;
            document.getElementById("colorpicker").onchange = function() {
            backRGB = this.value
            tool.strokeStyle=backRGB
            }
        }
    })
}
function getCoordinatesy(y){
    let bounds = canvas.getBoundingClientRect()
    return y-bounds.y 
}


