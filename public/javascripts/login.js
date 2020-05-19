//const base_url = "https://cryptovibes.herokuapp.com/";

var btnLogin = document.querySelector(".login-btn").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch('http://localhost:3000/users/login', {
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
        if (json.status === "success") {
            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "index";

        } else {
            let feedback = document.querySelector(".alarm");
            feedback.textContent = "Login failed 😢";
            feedback.classList.remove('hidden');
        }
    })
});