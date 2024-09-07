

let box = document.querySelectorAll(".text-a-photo")
let img = document.querySelectorAll(".imge");
let text = document.querySelectorAll("h2")


let side_scroll = document.querySelector(".side-scorle")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")
let btn = document.querySelector("button")

let boxFooter =document.querySelectorAll('.footer_PT')
let footer_img = document.querySelectorAll(".footer_img")
let footerText = document.querySelectorAll("h3")

// let h1 = document.querySelector("h1")
// let boxes = document.querySelector(".scrollUp")

prev.addEventListener("click",()=>{

    sideScorll(side_scroll,'left',5,500,10)
   
})

next.addEventListener("click",()=>{
   sideScorll(side_scroll,'right',5,500,10)

   
})



function sideScorll(element,direction,speed,distance,step) {
    scrollAmount = 0;
    let slideTimer = setInterval(function(){
        if(direction == "left"){
            element.scrollLeft -= step;
        } else{
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);

}

try {
for(let i = 0; i <= box.length; i++) {

    box[i].addEventListener('mouseover',()=> {
        img[i].style.opacity = "1"
        text[i].style.color = "white"
        text[i].style.fontSize = "80px"

        text[i].style.transform = "translateX(150px)"
    })

    box[i].addEventListener("mouseout",()=> {

        img[i].style.opacity = "0"
        text[i].style.color = "rgba(255, 255, 255, 0.4)"
        text[i].style.fontSize = "60px"
        text[i].style.transform = "translateX(0px)"
    })

}
}catch (error) {
    console.log("error in",error);
    
}
prev.addEventListener("click",()=>{
    console.log("hellow");
    
})
next.addEventListener("click",()=>{
    console.log("hellow");
    
})

for(let j = 0; j<=boxFooter.length; j++) {

    boxFooter[j].addEventListener("mouseover",() => {
        footer_img[j].style.opacity = "1"
        // footerText[j].style.color = "white"

    })

    boxFooter[j].addEventListener("mouseout",() => {

    footer_img[j].style.opacity = "0"
    //  footerText[j].style.color = ""
     
    })

}




// let div = document.querySelectorAll('div')
// function cb() {
//     const tb = window.innerHeight / 5 * 4;
//     boxes.forEach((div, idx)  => {
//         const boxtop = h1.getBoundingClientRect().top;

//         if (boxtop < tb) {
//             h1.classList.add("h1");
//         } else {
//             h1.classList.remove("h1");
//         }
//     });

// }