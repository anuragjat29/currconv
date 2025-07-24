import { countryList } from './code.js'
const dropdown=document.querySelectorAll(".dropdown select")
const exchange=document.querySelector("form button")

let fromcurrency1
let tocurrency1
let message=document.querySelector(".mes")


for(let select of dropdown){
    select.addEventListener("change",(select)=>{
        updateflag(select)
      
        
    })
    for (let code in countryList){
     select.innerHTML+=`<option value="${countryList[code]}">${code}</option>`
    }
}
 
function updateflag(select){
    let img=select.target.parentElement.querySelector("img")
    img.src=`https://flagsapi.com/${select.target.value}/shiny/64.png`
    // console.log(select.target.value)
}


let ex=(evt) =>{
evt.preventDefault();
let fromcurrency=document.querySelector(".from select")
let tocurrency=document.querySelector(".to select")
let amount=document.querySelector("input")
amount = amount.value;
// const accessKey = '762cb81cb30fc8baa33e373e24274d01';
const accessKey = '7c477464296ffb9c46f709442445e290';
for(let code in countryList){
  if(fromcurrency.value==countryList[code]){
    fromcurrency1=code
  }
  if(tocurrency.value==countryList[code]){
    tocurrency1=code
 }}
 
 
 const url = `https://api.currencylayer.com/convert?access_key=${accessKey}&from=${fromcurrency1}&to=${tocurrency1}&amount=${amount}`;
 
 fetch(url)
 .then(response => response.json())
 .then(data => {
   if (data.success) {
     message.innerHTML=`<b>${amount}</b>${fromcurrency1}=<b>${data.result}</b>${tocurrency1}`
     console.log(`Converted amount: ${data.result}`);
    } else {
      console.error('Error:', data.error.info);
    }
  })
  .catch(error => console.error('Error fetching data:', error));
}

exchange.addEventListener("click",ex)

let change=document.querySelector("#change")
change.addEventListener("click",(evt)=>{
  evt.preventDefault()
  let from=document.querySelectorAll(".select1")
  let from1=from[0].innerHTML
  let from2=from[1].innerHTML
  from[0].innerHTML=`${from2}`
  from[1].innerHTML=`${from1}`
  ex(evt)

})


// 762cb81cb30fc8baa33e373e24274d01



// const url = `https://api.currencylayer.com/convert?access_key=${accessKey}&from=${fromcurrency}&to=${tocurrency}&amount=${amount}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
  //     if (data.success) {
//       console.log(`Converted amount: ${data.result}`);
//     } else {
//       console.error('Error:', data.error.info);
//     }
//   })
//   .catch(error => console.error('Error fetching data:', error));

