
fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes", {
     'headers': {
          'Authorization': 'Bearer' + localStorage.getItem('token')
     }
}).then(result => {
     return result.json();
}).then(json => {
     console.log(json);
}).catch(err => {
     window.location.href = "https://cryptovibes.herokuapp.com/users/login";
})