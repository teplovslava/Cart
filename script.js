const addBtn = document.querySelector('.addCardItem button')
const nameInput = document.querySelectorAll('.left-part input')[0]
const codeInput = document.querySelectorAll('.left-part input')[1]
const costInput = document.querySelectorAll('.left-part input')[2]
const card = document.querySelector('.right-part')
const cardError = document.querySelector('.error')
let count = document.querySelector('.count')
let price = document.querySelector('.price')
let saleBtn = document.querySelector('.saleItemButton')
let saleInput = document.querySelector('.sale')
let itemArr = []
let saleValue= parseInt(saleInput.value)
let saleError = document.querySelector('.error-sale')
let saleNew = document.querySelector('.sale-new')





function CardItem(name,code,cost){
    this.name=name;
    this.code=code;
    this.cost=cost;
    this.sale = ""
}



let deleteBtn= document.querySelector(".deleteElem")

addBtn.addEventListener("click",function(){
    if(!nameInput.value ||!codeInput.value || !costInput.value){
        cardError.innerHTML='Неверно введены данные'
    }else{
    cardError.innerHTML=''
    itemArr.push(new CardItem(nameInput.value,codeInput.value,parseInt(costInput.value)))
    createElem()
    nameInput.value=''
    codeInput.value=''
    costInput.value=''
    count.innerHTML=`Кол-во товаров:${itemArr.length}`
    createSum()
    }

    
})

function htmlElem(item,index){
    return `<div>
    <h2>${item.name}</h2>
    <p>${item.code}</p>
    <p class="forSale"></p>
    <p>${item.cost} рублей</p>
    <button onclick="deleteElem(${index})" class="deleteElem">Удалить</button>
    </div>`
}


function createElem(){
    itemArr.length==0?card.innerHTML="<p class='list'>Список пуст</p>":card.innerHTML=''
    itemArr.forEach((item,index)=>{card.innerHTML += htmlElem(item,index)
    })

}


function deleteElem(index){
    itemArr.splice(index,1)
    createElem()
    count.innerHTML=`Кол-во товаров:${itemArr.length}`
    createSum()
}


function createSum(){
    let sumCount=0
    itemArr.forEach((item)=>sumCount+=parseInt(item.cost))
    price.innerHTML=`${sumCount} р`
}


saleBtn.addEventListener('click',function(){
    if(!saleInput.value){saleError.innerHTML="Недопустимое значение скидки"}
    else{
        saleError.innerHTML=""
        totalOfSale()
    }
})

function totalOfSale(){
    let saleItem = document.querySelectorAll('.forSale')
    
    itemArr.forEach((item,index)=>{saleItem[index].innerHTML=item.cost-item.cost*parseInt(saleInput.value)/100
    let bottom=saleItem[index].nextSibling.nextSibling
    bottom.classList.add("throught")
})

}

