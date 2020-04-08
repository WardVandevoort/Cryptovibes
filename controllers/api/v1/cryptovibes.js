let d = new Date();
let Month = d.getMonth() + 1;

const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transacties": []
        }
    });
}

const transactie = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transactie": {
                "bedrag": 50,
                "ontvanger": "Lisa",
                "verzender": "Ward",
                "datum": d.getDate() + "/" + Month + "/" + d.getFullYear() + "   " 
                     + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
                "reden": "Development help",
                "bericht": "Bedankt voor de hulp!"
            }
        }
    });
}

module.exports.getAll = getAll;
module.exports.transactie = transactie;