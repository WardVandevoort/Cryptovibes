//onst base_url = "https://cryptovibes.herokuapp.com/";

var btnSignup = document.querySelector("#submit").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    fetch('http://localhost:3000/users/signup', {
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
            let feedback = document.querySelector(".alert");
            feedback.textContent = "Sign up complete!";
            feedback.classList.remove('hidden');

            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "index";
        }
    })
});