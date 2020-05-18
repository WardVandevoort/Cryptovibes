const base_url ="https://cryptovibes.herokuapp.com/";

const receivername = document.querySelector('.receivername');
const matchUser = document.querySelector('.matchUser');

//search receiver and filter it
const searchReceiver = async searchText =>{
    const res = await fetch (base_url + 'users');
    const names = await res.json();

    console.log(names);
}

receivername.addEventListener('input',()=> searchReceiver(search.value));