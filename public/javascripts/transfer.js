const base_url ="https://cryptovibes.herokuapp.com/";

/* let primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity, 
        min: 500, 
        retries: 10 
    }
}); */

document.querySelector(".btn").addEventListener("click", function (e) {
    const that = this;
    let receiver = document.querySelector('.receiver').value;
    //let sender_id = document.querySelector('')
    let type = document.querySelector('.reason').value;
    let quantity = document.querySelector('.amount').value;
    let message = document.querySelector('.message').value;
    
    fetch(base_url + 'transfer/',{
        
  });
})