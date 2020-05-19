const base_url ="https://cryptovibes.herokuapp.com/";

const receivername = document.querySelector('.receiverName');
const matchUser = document.querySelector('.matchUser');

//search receiver and filter it
const searchReceivers = async searchText => {
    const res = await fetch ('../data/data.json');
    const names = await res.json();

    //console.log(names);

    //get matches 
    let matches = names.filter(name => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return name.name.match(regex) || name.abbr.match(regex);
    });

    console.log(matches);

    /* if(searchText.length === 0){
        matches = [];
        matchUser.innerHTML='';
    } */
    //outputHtml(matches);
}

/* const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match =>`
        <div class="card">
            <h4>${match.name} (${match.abbr}) <span class="summary">${match.capital}</span></h4>
        </div>`).join('');

        matchUser.innerHTML= html; 
    }
};*/

receivername.addEventListener('input',() => searchReceivers(receivername.value));