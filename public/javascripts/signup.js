const base_url = "https://cryptovibes.herokuapp.com/";

var btnSignup = document.querySelector("#submit").addEventListener("click", (e) => {
    let username;
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let validEmail = email.indexOf("@student.thomasmore.be");

    if(validEmail != -1){
        username = email.slice(0, validEmail);

        fetch(base_url + 'users/signup', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password,
                "wallet": 100
            })
            
        }).then(response => {
            return response.json();
        }).then(json => {
            if (json.status ==="success"){
                let token = json.data.token;
                localStorage.setItem("token", token);
                window.location.href = base_url;
            }
        })

    }


    
});