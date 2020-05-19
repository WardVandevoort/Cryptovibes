const base_url ="https://cryptovibes.herokuapp.com/";

const receivername = document.querySelector('.receiverName');
const matchUser = document.querySelector('.matchUser');

//search receiver and filter it
const searchReceivers = async searchText => {
    const res = await fetch ('../../data.json');
    const names = await res.json();

    //console.log(names);

    //get matches 
    let matches = names.filter(name => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return name.email.match(regex) || name.abbr.match(regex);
    });

    console.log(names);
}

receivername.addEventListener('input',searchReceivers(receivername.value));