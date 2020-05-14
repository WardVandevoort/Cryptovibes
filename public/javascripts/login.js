const base_url = "https://cryptovibes.herokuapp.com/";

var btnLogin = document.querySelector(".login_btn").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch(base_url + 'users/login', {
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