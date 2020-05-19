/* const base_url = "https://cryptovibes.herokuapp.com/";

var btnSignup = document.querySelector("#submit").addEventListener("click", (e) => {
    let username;
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let re_password = document.querySelector("#re_password").value;
    let emailValidation = email.indexOf("@student.thomasmore.be");
    let validPassword;
    let fieldsFilled;
    let validEmail;

    if(password === re_password){
        validPassword = true;
    }
    else{
        validPassword = false;
        document.querySelector(".passwordValidation").classList.remove("hidden");
        document.querySelector(".emailValidation").classList.add("hidden");
        document.querySelector(".fieldValidation").classList.add("hidden");
    }

    if(emailValidation != -1){
        validEmail = true;
    }
    else{
        validEmail = false;
        document.querySelector(".emailValidation").classList.remove("hidden");
        document.querySelector(".fieldValidation").classList.add("hidden");
        document.querySelector(".passwordValidation").classList.add("hidden");
    }

    if(firstname === '' || lastname === '' || email === '' || password === '' || re_password === ''){
        fieldsFilled = false;
        document.querySelector(".fieldValidation").classList.remove("hidden");
        document.querySelector(".passwordValidation").classList.add("hidden");
        document.querySelector(".emailValidation").classList.add("hidden");
    }
    else{
        fieldsFilled = true;
    }

    if(validEmail == true && validPassword == true && fieldsFilled == true){
        username = email.slice(0, emailValidation);

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
    
}); */