const base_url ="https://cryptovibes.herokuapp.com/";

const receivername = document.querySelector('.receiverName');
const matchUser = document.querySelector('.matchUser');

//search receiver and filter it
const searchReceiver = async searchText =>{
    const res = await fetch (base_url + '');
    const names = await res.json();

    //console.log(names);

    //get matches 
    let matches = names.filter(name => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return name.name.match(regex) || name.abbr.match(regex);
        console.log(names);
    });
};

receivername.addEventListener('input',searchReceiver(search.value));