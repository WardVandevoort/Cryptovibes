
console.log("ik werk");
alert("ik werk");
fetch("https://cryptovibes.herokuapp.com/api/v1/cryptovibes", {
     'headers': {
          'Authorization': 'Bearer' + localstorage.getItem('token')
     }
}).then(result => {
     return result.json();
}).then(json => {
     console.log(json);
}).catch(err => {
     console.log("foute token");
     window.location.href = "https://cryptovibes.herokuapp.com/users/login";
})