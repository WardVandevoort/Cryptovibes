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
    
    fetch(base_url + '/routes/transfer', {
        method: "post",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            receiver_id: receiver,
            type_id: type,
            quantity: quantity,
            message: message
        })
    }).then((e) => {
        if(e.status = 200) {
            primus.write({ receiver_id: receiver,
                type_id: type,
                quantity: quantity,
                message: message })
            alert("Transfer succeed");
        }
    });
    e.preventDefault();
  });