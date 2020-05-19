let token = localStorage.getItem("token");
let payment;

fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes/"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.transactions.forEach(transaction => {
          console.log(transaction);
          console.log(transaction.receiver_id);
          console.log(token);
          console.log(token.username);
         if (transaction.receiver_id == token.username) {
             payment = `<div class="deposit ${transaction.receiver_id} ${token.username}">
             <p>Cryptocoin +${transaction.quantity}</p>
             </div>`;
          } 
          else if(transaction.sender_id == token.username){
               payment = `<div class="withdrawal">
               <p>Cryptocoin -${transaction.quantity}</p>
               </div>`;
          }
         document.querySelector(".history").insertAdjacentHTML('afterend', payment);
     });
 
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });
