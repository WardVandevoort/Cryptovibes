document.querySelector(".submit").addEventListener('click', (e) =>{
    let receiver = document.querySelector(".searchReceiver").value;
    let reason = document.querySelector(".reason").value;
    let amount = document.querySelector(".amount").value;
    let message = document.querySelector(".message").value;

    fetch(base_url + 'transfers'),{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "receiver": receiver,
            "reason": reason,
            "amount":amount,
            "message": message
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === 'succes'){
            window.location ='/index';
        }
    })
        e.preventDefault();
    }