const base_url ="https://cryptovibes.herokuapp.com/";

const receivername = document.querySelector('.receiverName');
const matchUser = document.querySelector('.matchUser');

//search receiver and filter it
const searchReceivers = async searchText => {
    const res = await fetch ('../data/data.json');
    const receivers = await res.json();

    //console.log(receivers);

    //get matches 
    let matches = receivers.filter(receiver => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return receiver.receivername.match(regex);
    });

    console.log(matches);

    if(searchText.length === 0){
        matches = [];
        matchUser.innerHTML='';
    }
    outputHtml(matches);
}

const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match =>`<p>[H] ${match.receivername}[A]</p>`).join('');

        matchUser.innerHTML= html; 
    }
};

receivername.addEventListener('input',() => searchReceivers(receivername.value));