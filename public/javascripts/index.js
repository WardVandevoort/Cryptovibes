
let token = localStorage.getItem("token");

let payment;

fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes/"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.transactions.forEach(transaction => {
          let decoded = JSON.parse(atob(token.split('.')[1]));
          let username = decoded.username;
          let locate = username.indexOf("@student.thomasmore.be");
          let tokenData = username.slice(0, locate);

          console.log(decoded);
          console.log(tokenData);
         if (transaction.receiver_id == tokenData) {
             payment = `<div class="deposit ${transaction.receiver_id} ${token.username}">
             <p>Cryptocoin +${transaction.quantity}</p>
             </div>`;
          } 
          else if(transaction.sender_id == tokenData){
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
