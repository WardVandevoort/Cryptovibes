let token = localStorage.getItem("token");
let decoded = JSON.parse(atob(token.split('.')[1]));
let username = decoded.username;
let locate = username.indexOf("@student.thomasmore.be");
let tokenData = username.slice(0, locate);

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
             payment = `<div class="deposit ${transaction._id}">
             <p>Cryptocoin +${transaction.quantity}</p>
             </div>`;
             document.querySelector(".history").insertAdjacentHTML('afterend', payment);
          } 
          else if(transaction.sender_id == tokenData){
             payment = `<div class="withdrawal ${transaction._id}">
             <p>Cryptocoin -${transaction.quantity}</p>
             </div>`;
             document.querySelector(".history").insertAdjacentHTML('afterend', payment);
          }
         
     });
 
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });