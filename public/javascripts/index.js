fetch("https://cryptovibes.herokuapp.com/getUsers", {
     'headers': {
          'Authorization': 'Bearer' + localstorage.getItem('token')
     }
}).then(result => {
     return result.json();
}).then(json => {
     console.log(json);
}).catch(err => {
     window.location.href = "https://cryptovibes.herokuapp.com/users/login"
})