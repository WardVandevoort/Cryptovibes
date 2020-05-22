const receiverName = document.querySelector('.receiverName');
const matchUser = document.querySelector('.matchUser');

//search receiver and filter it
    const searchReceivers = async searchText => {

    const res = await fetch (base_url + 'api/v1/cryptovibes/users');
    const receivers = await res.json();

    //console.log(receivers);
    
    //get matches 
    let matches = receivers.filter(receiver => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return receiver.receiverName.match(regex);
        console.log(matches);
    });

    if(searchText.length === 0){
        matches = [];
        matchUser.innerHTML='';
    }
    outputHtml(matches);

    const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match =>`<a class ='${match.receiverName}' href = " ">${match.receiverName}</a>`).join('');
        matchUser.innerHTML= html; 
        }
    }
    
receiverName.addEventListener('input',() => searchReceivers(receiverName.value));
    }