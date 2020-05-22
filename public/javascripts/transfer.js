const base_url ="https://cryptovibes.herokuapp.com/";
let token = localStorage.getItem("token");

if(token == null){
   
    window.location.href = "https://cryptovibes.herokuapp.com/users/login";
}

let decoded = JSON.parse(atob(token.split('.')[1]));
let tokenData = decoded.username;

document.querySelector(".btn").addEventListener('click', (e) =>{
    let receiver_id = document.querySelector(".receiverName").value;
    let type_id = document.querySelector("#reason").value;
    let quantity = document.querySelector(".amountinput").value;
    let message = document.querySelector(".messageinput").value;

    //console.log(receiver_id);

    fetch(base_url + 'api/v1/cryptovibes/transfer',{
        method:"post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "receiver_id": receiver_id,
            "sender_id": tokenData,
            "type_id": type_id,
            "quantity": quantity,
            "message": message
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        if (json.status === 'success'){
            alert("Transfer confirmed");
            window.location.href = base_url;
        }
    })
        e.preventDefault();
    })