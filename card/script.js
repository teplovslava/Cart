const addBtn = document.querySelector('.addCardItem button')
const nameInput = document.querySelectorAll('.left-part input')[0]
const codeInput = document.querySelectorAll('.left-part input')[1]
const costInput = document.querySelectorAll('.left-part input')[2]
const card = document.querySelector('.right-part')
const cardError = document.querySelector('.error')
const count = document.querySelector('.count')


let itemArr = []


function CardItem(name,code,cost){
    this.name=name;
    this.code=code;
    this.cost=cost;
}

let deleteBtn= document.querySelector(".deleteElem")

addBtn.addEventListener("click",function(){
    if(!nameInput.value ||!codeInput.value || !costInput.value){
        cardError.innerHTML='Неверно введены данные'
    }else{
    cardError.innerHTML=''
    itemArr.push(new CardItem(nameInput.value,codeInput.value,parseInt(costInput.value)))
    console.log(itemArr)
    createElem()
    nameInput.value=''
    codeInput.value=''
    costInput.value=''
    count.innerHTML=`Кол-во товаров:${itemArr.length}`
    }

    
})

function htmlElem(item,index){
    return `<div>
    <h2>${item.name}</h2>
    <p>${item.code}</p>
    <p>${item.cost}</p>
    <button onclick="deleteElem(${index})" class="deleteElem">Удалить</button>
    </div>`
}


function createElem(){
    itemArr.length==0?card.innerHTML="<p class='list'>Список пуст</p>":card.innerHTML=''
    itemArr.forEach((item,index)=>card.innerHTML += htmlElem(item,index))
}

function deleteElem(index){
    itemArr.splice(index,1)
    createElem()
    count.innerHTML=`Кол-во товаров:${itemArr.length}`

}


