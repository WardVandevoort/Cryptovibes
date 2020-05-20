//const base_url = "http://localhost:3000/";

var btnLogin = document.querySelector(".login_btn").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch('localhost:3000/api/v1/cryptovibes/users/login', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        if (json.status ==="success"){
            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = base_url;
        } else {
            let feedback = document.querySelector(".alarm");
            feedback.textContent = "Login failed 😢";
            feedback.classList.remove('hidden'); 
        }
    })
});