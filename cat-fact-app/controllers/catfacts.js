
//const Fact = require('../models/catfact')

module.exports = {
    show
    
};
const ROOT_URL = 'https://catfact.ninja';

async function show (req, res){

    const catInfo = await fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
   
    res.render('cats/fact', {
        title : 'Cat Fact:',
        catInfo
    });

}