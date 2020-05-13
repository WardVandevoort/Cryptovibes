const base_url = "https://cryptovibes.herokuapp.com/";

var btnSignup = document.querySelector("#submit").addEventListener("click", (e) => {
    let username;
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let re_password = document.querySelector("#re_password").value;
    let validEmail = email.indexOf("@student.thomasmore.be");
    let validPassword;
    let fieldsFilled;

    if(firstname === '' || lastname === '' || email === '' || password === '' || re_password === ''){
        fieldsFilled = false;
        document.querySelector(".fieldValidation").classList.remove("hidden");
        document.querySelector(".passwordValidation").setAttribute("class", "hidden");
        document.querySelector(".emailValidation").setAttribute("class", "hidden");
        return;
    }
    else{
        fieldsFilled = true;
    }

    if(validEmail != -1){
        validEmail = true;
    }
    else{
        validEmail = false;
        document.querySelector(".emailValidation").classList.remove("hidden");
        document.querySelector(".fieldValidation").setAttribute("class", "hidden");
        document.querySelector(".passwordValidation").setAttribute("class", "hidden");
        return;
    }

    if(password === re_password){
        validPassword = true;
    }
    else{
        validPassword = false;
        document.querySelector(".passwordValidation").classList.remove("hidden");
        document.querySelector(".emailValidation").setAttribute("class", "hidden");
        document.querySelector(".fieldValidation").setAttribute("class", "hidden");
        return;
    }

    if(validEmail == true && validPassword == true && fieldsFilled == true){
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