/*let token = localStorage.getItem("token");

fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes/"
).then(result => {
     return result.json();
 }).then(json => {
     json.data.transactions.forEach(transaction => {
         if (transaction.receiver_id == ) {
             var newTodo = `<div class="todo todo--completed">
             <input data-id="${todo._id}" type="checkbox" class="todo__state">  
             <div class="todo__text">${todo.text}</div>
             <a class="todo__delete" href="#" data-id="${todo._id}">delete</a>
             </div>`;
         } 
         document.querySelector(".todo__new ").insertAdjacentHTML('afterend', newTodo);
     });
 
 
 }).catch(err => {
     console.log(err);
     console.log("😭😭😭")
 });
 
 
 //append a todo to the dom 
 let appendTodo = (json) => {
     let todo = `<div class="todo">
                     <input data-id="${json.data.todo._id}" type="checkbox" class="todo__state">  
                     <div class="todo__text">${json.data.todo.text}</div>
                     <a class="todo__delete" href="#" data-id="${json.data.todo._id}">delete</a>
                 </div>`;
     document.querySelector(".todo__new ").insertAdjacentHTML('afterend', todo);
 }*/