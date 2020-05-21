let token = localStorage.getItem("token");

if(token == null){
   
    window.location.href = "https://cryptovibes.herokuapp.com/users/login";
}

let decoded = JSON.parse(atob(token.split('.')[1]));
let tokenData = decoded.username; // let naam was username
/*let locate = username.indexOf("@student.thomasmore.be");
let tokenData = username.slice(0, locate);*/

let payment;
let first = true;

fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes/users"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.Users.forEach(user => {

         if (user.username == tokenData) {
             document.querySelector(".balance").innerHTML = user.wallet;
          } 
         
     });
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });


 
fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes/transfer"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.transactions.forEach(transaction => {

         if (transaction.receiver_id == tokenData) {
             payment = `<div class="payment payment--deposit ${transaction._id}">
             <p><img class="avatar" src="../stylesheets/sass/minilogo.svg" /> ${transaction.sender_id} <span class="payment__quantity">+${transaction.quantity}</span></p>
             </div>`;
             document.querySelector(".history").insertAdjacentHTML('afterend', payment);
          } 
          else if(transaction.sender_id == tokenData){
             payment = `<div class="payment payment--withdrawal ${transaction._id}">
             <p><img class="avatar" src="../stylesheets/sass/minilogo.svg" /> ${transaction.receiver_id} <span class="payment__quantity">-${transaction.quantity}</span></p>
             </div>`;
             document.querySelector(".history").insertAdjacentHTML('afterend', payment);
          }
         
     });
 
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });