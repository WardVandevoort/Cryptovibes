const base_url ="https://cryptovibes.herokuapp.com/";

var btnTransfer = document.querySelector(".btn").addEventListener("click", (e)=>{
    let receiver_id = document.querySelector('.receiver').value;
    //let sender_id = document.querySelector('')
    let type_id = document.querySelector('.reason').value;
    let quantity = document.querySelector('.amount').value;
    let message = document.querySelector('.message').value;
    
    fetch(base_url + '/', {
        method: "post",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "receiver_id": receiver_id,
            "type_id": type_id,
            "quantity": quantity,
            "message": message
        })
    }). then(response =>{
        return response.json();
    }).then(json => {
        console.log(json);

    })
})
