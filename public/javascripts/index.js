
/* let token = localStorage.getItem("token");
let decoded = JSON.parse(atob(token.split('.')[1]));
let username = decoded.username;
let locate = username.indexOf("@student.thomasmore.be");
let tokenData = username.slice(0, locate);

let payment;
 */
fetch("http://localhost:3000/api/v1/cryptovibes/users"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.users.forEach(user => {

         if (user.username == tokenData) {
             document.querySelector(".balance").innerHTML = user.wallet;
          } 
         
     });
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });


 
/* fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes/"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.transactions.forEach(transaction => {
          console.log(json);
          console.log(json.data);
          console.log(json.data.transactions);
          console.log(transaction);

         if (transaction.receiver_id == tokenData) {
             payment = `<div class="deposit">
             <p>Cryptocoin +${transaction.quantity}</p>
             </div>`;
             document.querySelector(".history").insertAdjacentHTML('afterend', payment);
          } 
          else if(transaction.sender_id == tokenData){
               payment = `<div class="withdrawal">
               <p>Cryptocoin -${transaction.quantity}</p>
               </div>`;
               document.querySelector(".history").insertAdjacentHTML('afterend', payment);
          }
         
     });
 
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });
 */