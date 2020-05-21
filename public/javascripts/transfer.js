const base_url ="https://cryptovibes.herokuapp.com/";

document.querySelector(".submit").addEventListener('click', (e) =>{
    let receiver = document.querySelector(".searchReceiver").value;
    let type_id = document.querySelector(".reason").value;
    let quantity = document.querySelector(".amount").value;
    let message = document.querySelector(".message").value;

    fetch(base_url + 'transfers'),{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "receiver": receiver,
            "type_id": type_id,
            "quantity":quantity,
            "message": message
        })
    }.then(response => {
        return response.json();
    }).then(json => {
        if (json.status === 'succes'){
            window.location ='/index';
        }
    })
        e.preventDefault();
    })