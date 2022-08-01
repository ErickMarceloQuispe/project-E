let cards = []
cards.push(document.querySelector(".card-1"))
cards.push(document.querySelector(".card-2"))
cards.push(document.querySelector(".card-3"))
cards.push(document.querySelector(".card-5"))

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

let isFirstPage = true

var jsonData = []
let json = fetch('data.json').then(response => response.json())
    .then(info => {
        jsonData = info;
        bindCards();
    })

function bindCards(){
        if(isFirstPage){
            dropImage(cards[0],jsonData.card1[0],jsonData.card1[2])
            addImage(cards[1],jsonData.card2[0])
            addImage(cards[2],jsonData.card3[0])
            dropImage(cards[3],jsonData.card5[0],jsonData.card5[2])
            
            btn1.disabled = true;
            btn2.disabled = false;

        }else{
            addImage(cards[0],jsonData.card1[1])
            dropImage(cards[1],jsonData.card2[1],jsonData.card2[2])
            dropImage(cards[2],jsonData.card3[1],jsonData.card3[2])
            addImage(cards[3],jsonData.card5[1])
            
            btn1.disabled = false;
            btn2.disabled = true;
        }
        isFirstPage = !isFirstPage
}
function addImage(htmlObj,imgUrl){
    htmlObj.innerHTML = ""
    htmlObj.style.backgroundImage = `url('${imgUrl}')`
    htmlObj.style.backgroundSize = "cover"
}
function dropImage(htmlObj,textToShow,backColor){
    htmlObj.innerHTML = textToShow
    htmlObj.style.backgroundImage = ``
    htmlObj.style.backgroundSize = ""
    htmlObj.style.backgroundColor = backColor
}