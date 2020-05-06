const base_url = "https://cryptovibes.herokuapp.com/";

var btnSignup = document.querySelector("#submit").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch(base_url + '../../routes/users/signup', {
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
        if (json.status ==="succes"){
            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/views/index.pug";
        }
    })
});