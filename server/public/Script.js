let canvas = document.querySelector("canvas")
canvas.height = window.innerHeight
canvas.width= window.innerWidth
let tool = canvas.getContext("2d");
let isMouseDown = false
tool.strokeStyle="#800000"

// tool.fillStyle="black"
// tool.fillRect(0,0,canvas.height/2,canvas.width/2)
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
console.log(options)
for(let i =0;i< options.length;i++){
    options[i].addEventListener("click",function(e){
        let option = e.currentTarget
        console.log(option)
        let name = option.getAttribute("id")
        if (name == "eraser"){
            tool.strokeStyle = document.getElementById("colorpicker2").value;
        }else if(name == "pencil"){
            console.log("pencil selected")
            tool.strokeStyle= document.getElementById("colorpicker").value;
        }else if(name =="black1"){
            tool.lineWidth=0.5
        }
        else if(name =="black2"){
            tool.lineWidth=7
        }
        else if(name =="black3"){
            tool.lineWidth=20
        }else if(name =="colorpicker"){
            var backRGB = document.getElementById("colorpicker").value;
            console.log(backRGB)
            document.getElementById("colorpicker").onchange = function() {
            backRGB = this.value
            tool.strokeStyle=backRGB
            }
        }else if(name =="colorpicker2"){
            var backRGB = document.getElementById("colorpicker2").value;
            document.getElementById("colorpicker2").onchange = function() {
            backRGB = this.value
            console.log(backRGB)
            tool.fillStyle = backRGB
            tool.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    })
}
function getCoordinatesy(y){
    let bounds = canvas.getBoundingClientRect()
    return y-bounds.y 
}


