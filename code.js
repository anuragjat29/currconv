export const countryList = {
  "USD": "US",
  "INR": "IN",
  "EUR": "EU",
  "GBP": "GB",
  "JPY": "JP",
  "AUD": "AU",
  "CAD": "CA",
  "CHF": "CH",
  "CNY": "CN",
  "SGD": "SG"
};




// const url="https://cat-fact.herokuapp.com/facts";
//  **async await** 
// const getfacts=async ()=>{
//     let response=await fetch(url)
//     console.log(response)
//     let data=await response.json()
//     console.log(data[1].text)
// }

//   **promise chain**
// function getfacts(){
//     let promise=fetch(url)
// promise.then((promise)=>{
//   return promise.json()  
// }).then((data)=>{
//     console.log(data[0].text)
// })// }
// getfacts()