const image = document.querySelector("img")
const next = document.querySelector(".btn-right")
const prev = document.querySelector(".btn-left")

let num = 1;


next.addEventListener('click', ()=>{
    if(num < 5){
    num += 1
    image.src = `/photo image ${num}.jpg` 
    }
})


prev.addEventListener('click', ()=>{
    if(num > 1){
    num -= 1;
    image.src = `photo image ${num}.jpg`
}
})

console.log(num)